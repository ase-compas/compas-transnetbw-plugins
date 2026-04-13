import { defaultTypeService } from "../../../bootstrap";
import type { TypeKind } from "../../../shared/model";
import { createEmptySCLDocument } from "../../../shared/utils/scl.utils";
import type { CreateDefaultTypeInfo, DefaulteTypeSaveInfo, DefaultTypeList } from "../types";
import { mapDefaulTypesListToVersions } from "../utils";

export interface DefaultTypeInfo {
    kind: TypeKind;
    instance: string;
    description: string;
    rootId: string;
    version: string;
}

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
        return ((this.isEditMode && this.dirty) || this.isCreateMode) && this.info?.rootId !== ''; 
    });

    /**
     * Loads an existing default type into editable mode.
     *
     * Side effects:
     * - sets mode to "edit"
     * - populates info/doc
     * - sets docIsReady
     */
    async loadById(id: string) {
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
                rootId: this.excractRootIdFromXml(result.doc) || '',
                version: result.version || ''
            }
            this.typeVersions = await defaultTypeService.listVersions(result.kind, result.instance);
            this.setVersions(this.typeVersions);
            if (this.currentVersion?.locked) {
                this.mode = 'view';
            }

            this.doc = result.doc;
            this.loadedDocRootId = this.info.rootId;
        } catch (error) {
            console.log(error)
            this.error = "Failed to load default type";
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
    async loadByVersion(version: string) {
        const versionInfo = $state.snapshot(this.typeVersions)?.content?.find(v => v.version === version);
        if (versionInfo && versionInfo.id) {
            await this.loadById(versionInfo.id);
        }
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
    async saveAsNewVersion(saveInfo: DefaulteTypeSaveInfo) {
        this.prepareDocForUpload();
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

        const updploadInfo = {
            kind: infoSnapshot.kind,
            instance: infoSnapshot.instance,
            description: saveInfo?.description,
            doc: this.doc,
            nextVersionType: this.isEditMode ? saveInfo?.versionUpdate : undefined,
            version: this.isCreateMode ? infoSnapshot.version : undefined,
        };

        const result = await defaultTypeService.upload(updploadInfo);
        await this.loadById(result.id!);
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
     * Ensures the XML root has the ID from UI state before upload.
     */
    private prepareDocForUpload() {
        this.updateRootId();
        this.removeUnreferencedTypes();
    }


    private removeUnreferencedTypes() {
        if (!this.doc) {
            throw new Error("Document is not defined");
        }

        const root = this.doc.documentElement;
        const dataTypeTemplates = root.querySelector("DataTypeTemplates");
        if (!dataTypeTemplates) {
            return;
        }

        const referencedIds = new Set<string>();
        // Collect all referenced type IDs from the document
        const collectReferences = (element: Element) => {
            const refId = element.getAttribute("type");
            if (refId) {
                referencedIds.add(refId);
            }
            element.childNodes.forEach(child => {
                if (child.nodeType === Node.ELEMENT_NODE) {
                    collectReferences(child as Element);
                }
            });
        };
        collectReferences(root);

        // Remove unreferenced DataType elements
        const dataTypes = dataTypeTemplates.querySelectorAll("DataType");
        dataTypes.forEach(dataType => {
            const id = dataType.getAttribute("id");
            if (id && !referencedIds.has(id)) {
                dataType.remove();
            }
        });
    }

    /**
     * Extracts root element ID from XML document if present.
     */
    private excractRootIdFromXml(doc: XMLDocument): string | undefined {
        const root = doc.documentElement;
        if (root.hasAttribute("id")) {
            return root.getAttribute("id") || undefined;
        }
        return undefined;
    }

}
