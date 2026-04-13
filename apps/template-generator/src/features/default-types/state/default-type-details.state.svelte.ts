import { defaultTypeService } from "../../../bootstrap";
import type { TypeKind } from "../../../shared/model";
import { collectReachableTypeIds, createEmptySCLDocument, listDataTypeElements } from "../../../shared/utils/scl.utils";
import type { CreateDefaultTypeInfo, DefaulteTypeSaveInfo, DefaultTypeList } from "../types";
import { excractRootIdFromXml } from "../utils/default-type-scl.utils";
import { mapDefaulTypesListToVersions } from "../utils/version.utils";

export interface DefaultTypeInfo {
    kind: TypeKind;
    instance: string;
    description: string;
    rootId: string;
    version: string;
}

export interface SaveDefaultTypeSummary {
    rootId: string;
    totalDataTypeCount: number;
    reachableDataTypeCount: number;
    removableDataTypeCount: number;
    removableTypeIds: string[];
    currentVersion?: string;
    mode: 'create' | 'update';
}

export type ApiCallResult<T = void> =
    | { ok: true; data: T }
    | { ok: false; message: string; cause?: unknown };

/**
 * UI state for DefaultTypeDetails.
 *
 * Ownership boundaries:
 * - This class owns default-type data loading/creation and XML document state.
 * - The component owns integration concerns (DocState + DataTypeService wiring).
 */
export class DefaultTypeDetailsState {

    static DRAFT_ROOT_ID = 'default-root-id';

    // State properties

    // edit: editable latest version
    // create: new in-memory document
    // view: readonly loaded version
    mode: 'create' | 'edit' | 'view' = $state('create');
    dirty: boolean = $state(false); // true if doc has unsaved changes

    loading: boolean = $state(false);
    saving: boolean = $state(false);
    error: string | null = $state(null);
    info: DefaultTypeInfo | undefined = $state(undefined);
    loadedDocRootId: string | undefined = $state(undefined);
    // True once doc has been initialized and can be consumed by TypeDetails.
    docIsReady = $state(false);

    // The XML document representing the default type - now reactive
    doc: XMLDocument | undefined = $state(undefined);

    isCreateMode = $derived.by(() => this.mode === 'create');
    isEditMode = $derived.by(() => this.mode === 'edit');
    isViewMode = $derived.by(() => this.mode === 'view');

    typeVersions: DefaultTypeList | null = $state(null);
    versions: Version[] =  $state([]);
    currentVersion: Version | null = $state(null);

    canSave = $derived.by(() => {
        return !this.saving && ((this.isEditMode && this.dirty) || this.isCreateMode) && this.info?.rootId !== '';
    });

    /**
     * Loads an existing default type into editable mode.
     *
     * Side effects:
     * - sets mode to "edit"
     * - populates info/doc
     * - sets docIsReady
     */
    async loadById(id: string): Promise<ApiCallResult<{ id: string }>> {
        this.dirty = false;
        this.mode = 'edit';
        this.loading = true;
        this.error = null;
        try {
            const result = await defaultTypeService.getById(id);

            this.info = {
                kind: result.kind,
                instance: result.instance,
                description: result.description || '',
                rootId: excractRootIdFromXml(result.doc) || '',
                version: result.version || ''
            }
            this.typeVersions = await defaultTypeService.listVersions(result.kind, result.instance);
            this.setVersions(this.typeVersions);
            if (this.currentVersion?.locked) {
                this.mode = 'view';
            }

            this.doc = result.doc;
            this.loadedDocRootId = this.info.rootId;
            return { ok: true, data: { id } };
        } catch (error) {
            const message = 'Failed to load default type';
            this.error = message;
            return { ok: false, message, cause: error };
        } finally {
            this.loading = false;
        }
    }

    private setVersions(typeVersions: DefaultTypeList) {
        this.typeVersions = typeVersions;
        this.versions = mapDefaulTypesListToVersions(typeVersions);
        this.currentVersion = this.versions.find(v => v.version === this.info?.version) || null
    }

    /**
     * Loads a specific version of the default type.
     * @param version 
     */
    async loadByVersion(version: string): Promise<ApiCallResult<{ version: string }>> {
        const versionInfo = $state.snapshot(this.typeVersions)?.content?.find(v => v.version === version);
        if (!versionInfo?.id) {
            const message = `Version "${version}" not found.`;
            this.error = message;
            return { ok: false, message };
        }

        const result = await this.loadById(versionInfo.id);
        if (!result.ok) {
            return result;
        }

        return { ok: true, data: { version } };
    }   

    /**
     * Creates a new in-memory default type document from create input.
     *
     * Side effects:
     * - sets mode to "create"
     * - initializes info/doc
     * - sets docIsReady
     */
    createEmpty(initial: CreateDefaultTypeInfo) {
        this.mode = 'create';
        this.dirty = true;
        this.info = {
            kind: initial.kind,
            instance: initial.instance,
            description: '',
            rootId: '', // will be set on save
            version: initial.version
        };
        this.currentVersion = {version: initial.version, locked: false, latest: true};
        this.doc = createEmptySCLDocument("DefaultType");
        this.loadedDocRootId = DefaultTypeDetailsState.DRAFT_ROOT_ID;
    }

    /**
     * Uploads current in-memory document as a new default type version,
     * then reloads the persisted entity to refresh local state.
     */
    async saveAsNewVersion(saveInfo: DefaulteTypeSaveInfo): Promise<ApiCallResult<{ id: string }>> {
        const infoSnapshot = $state.snapshot(this.info);

        if (!infoSnapshot) {
            throw new Error("Default type info is not defined");
        }

        if (!this.doc) {
            throw new Error("Document is not defined");
        }

        if (this.isViewMode) {
            throw new Error("Cannot save in view mode");
        }

        this.error = null;
        this.saving = true;

        const updploadInfo = {
            kind: infoSnapshot.kind,
            instance: infoSnapshot.instance,
            description: saveInfo.description?.trim() || undefined,
            doc: this.doc,
            nextVersionType: this.isEditMode ? saveInfo?.versionUpdate : undefined,
            version: this.isCreateMode ? infoSnapshot.version : undefined,
        };

        try {
            this.prepareDocForUpload();
            const result = await defaultTypeService.upload(updploadInfo);

            if (!result.id) {
                return { ok: false, message: 'Failed to save default type.' };
            }

            const reloadResult = await this.loadById(result.id);
            if (!reloadResult.ok) {
                return { ok: false, message: `Failed to reload latest state: ${reloadResult.message}` };
            }

            this.dirty = false;
            return { ok: true, data: { id: result.id } };
        } catch (error) {
            const message = 'Failed to save default type';
            this.error = message;
            return { ok: false, message, cause: error };
        } finally {
            this.saving = false;
        }
    }

    /**
     * Computes a pre-save summary for UI display in save dialogs.
     * Reachability is calculated from the root type id via `type` references.
     */
    getSaveSummary(): SaveDefaultTypeSummary | null {
        if (!this.doc || !this.info) {
            return null;
        }

        const rootId = this.info.rootId || this.loadedDocRootId || DefaultTypeDetailsState.DRAFT_ROOT_ID;
        const dataTypeElements = listDataTypeElements(this.doc);
        const reachableIds = collectReachableTypeIds(this.doc, rootId);
        const removableTypeIds = dataTypeElements.flatMap((element) => {
            const id = element.getAttribute('id');
            return id && !reachableIds.has(id) ? [id] : [];
        }).sort((a, b) => a.localeCompare(b));

        return {
            rootId,
            totalDataTypeCount: dataTypeElements.length,
            reachableDataTypeCount: Math.min(reachableIds.size, dataTypeElements.length),
            removableDataTypeCount: removableTypeIds.length,
            removableTypeIds,
            currentVersion: this.info.version,
            mode: this.isCreateMode ? 'create' : 'update',
        };
    }

    /**
     * Updates the root id of the XML document to match the one in the UI state.
     */
    private updateRootId() {
        if (!this.doc) {
            throw new Error("Document is not defined");
        }
        if (!this.info) {
            throw new Error("Default type info is not defined");
        }

        const root = this.doc.documentElement;
        root.setAttribute("id", this.info.rootId);
        // replace id of root element with loadedDocRootId
        const rootDataType = root.querySelector(`DataTypeTemplates > [id="${this.loadedDocRootId}"]`);
        rootDataType?.setAttribute("id", this.info.rootId);
        this.loadedDocRootId = this.info.rootId;
    }

    /**
     * Preparse the XML document for upload.
     * - Ensures root id is updated in the document
     * - Removes unreferenced types
     */
    private prepareDocForUpload() {
        this.updateRootId();
        this.removeUnreferencedTypes();
    }


    private removeUnreferencedTypes() {
        if (!this.doc) {
            throw new Error("Document is not defined");
        }

        const dataTypeElements = listDataTypeElements(this.doc);
        if (dataTypeElements.length === 0) {
            return;
        }

        const rootId = this.info?.rootId || this.loadedDocRootId || DefaultTypeDetailsState.DRAFT_ROOT_ID;
        const reachableIds = collectReachableTypeIds(this.doc, rootId);

        dataTypeElements.forEach((dataType) => {
            const id = dataType.getAttribute('id');
            if (id && !reachableIds.has(id)) {
                dataType.remove();
            }
        });
    }

}
