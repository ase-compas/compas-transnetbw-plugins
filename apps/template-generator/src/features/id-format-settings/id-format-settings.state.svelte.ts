import { OscdIdGenerator, type IdFormat } from "@oscd-transnet-plugins/oscd-services/id-generator";
import { TypeKind } from "../../shared/model";
import { getContext, setContext } from "svelte";
import type { TypeIdFormatSetting, TypeIdFormatSettings } from "./types";
import { idFormatSettingsService } from "../../bootstrap";
import type { GenerateIdResult } from "../type-details/components/ui/CreateTypeForm.svelte";

const TYPE_KINDS: TypeKind[] = [
    TypeKind.LNodeType,
    TypeKind.DOType,
    TypeKind.DAType,
    TypeKind.EnumType
];

function createDefaultSetting(): TypeIdFormatSetting {
    return {
        enabled: false,
        format: null,
        referenceFormatEnabled: false,
        referenceFormat: null
    };
}

function createDefaultSettings(): TypeIdFormatSettings {
    return {
        global: createDefaultSetting(),
        typeSpecific: Object.fromEntries(
            TYPE_KINDS.map((kind) => [kind, createDefaultSetting()])
        ) as TypeIdFormatSettings['typeSpecific']
    };
}

class IdFormatSettingsState {

    public settingsCacheTtlSeconds: number = 45;

    loading: boolean = $state(false);
    error: string | null = $state(null);

    settings: TypeIdFormatSettings = $state(createDefaultSettings());

    private hasLoadedSettings = false;
    private settingsLoadedAt = 0;


    public async load(forceReload: boolean = false) {
        this.loading = true;
        this.error = null;
        try {
            await this.refreshSettingsIfStale(forceReload);
        } catch (error) {
            console.error('Failed to load ID format settings:', error);
            this.error = 'Failed to load settings';
        } finally {
            this.loading = false;
        }
    }

    public async save() {
        const saveToSettings = this.sanitizeSettings(this.settings);

        try {
            await idFormatSettingsService.saveSettings(saveToSettings);
            this.settings = saveToSettings;
            this.hasLoadedSettings = true;
            this.settingsLoadedAt = Date.now();
        } catch (error) {
            console.error('Failed to save ID format settings:', error);
            this.error = 'Failed to save settings';
        }
    }

    public generateId(typeKind: TypeKind, ctx: { instance: string }): string | undefined {
        let format: IdFormat | undefined;
        if (this.settings.typeSpecific[typeKind]?.enabled) {
            format = this.settings.typeSpecific[typeKind].format;
        } else if (this.settings.global.enabled) {
            format = this.settings.global.format;
        }
        if (!format) {
            return undefined;
        }
        return new OscdIdGenerator(format).generateId({ variables: ctx });
    }

    public generateReferenceId(typeKind: TypeKind, ctx: { instance: string, reference: string }): string | undefined {
        let format: IdFormat | undefined;
        if (this.settings.typeSpecific[typeKind]?.referenceFormatEnabled) {
            format = this.settings.typeSpecific[typeKind].referenceFormat;
        } else if (this.settings.typeSpecific[typeKind]?.enabled) {
            format = this.settings.typeSpecific[typeKind].format;
        } else if (this.settings.global.referenceFormatEnabled) {
            format = this.settings.global.referenceFormat;
        } else if (this.settings.global.enabled) {
            format = this.settings.global.format;
        }
        if (!format) {
            return undefined;
        }
        return new OscdIdGenerator(format).generateId({ variables: ctx });
    }

    /**
     * Generate ID for a type and return result with user-facing error messages.
     * Consolidates error handling for type ID generation across dialogs.
     */
    public generateIdWithResult(typeKind: TypeKind, ctx: { instance: string }): GenerateIdResult {
        const generatedId = this.generateId(typeKind, ctx);
        if (generatedId) {
            return { id: generatedId };
        }

        if (this.error) {
            return { message: 'ID format settings could not be loaded. Please try again.' };
        }

        return { message: 'No ID format is configured for this type. Configure it in ID Builder.' };
    }

    /**
     * Generate reference ID for a type and return result with user-facing error messages.
     * Consolidates error handling for reference ID generation across dialogs.
     */
    public generateReferenceIdWithResult(typeKind: TypeKind, ctx: { instance: string; reference: string }): GenerateIdResult {
        const generatedId = this.generateReferenceId(typeKind, ctx);
        if (generatedId) {
            return { id: generatedId };
        }

        if (this.error) {
            return { message: 'ID format settings could not be loaded. Please try again.' };
        }

        return { message: 'No ID format is configured for this type. Configure it in ID Builder.' };
    }

    public setFormat(typeKind: TypeKind | 'global', idKind: 'format' | 'referenceFormat', format: IdFormat) {
        const setting = typeKind === 'global'
            ? this.settings.global
            : (this.settings.typeSpecific[typeKind] ??= createDefaultSetting());
        setting[idKind] = format;
    }

    private async fetchSettings(): Promise<TypeIdFormatSettings> {
        try {
            const fetchedSettings = await idFormatSettingsService.getSettings();
            if (fetchedSettings) {
                return fetchedSettings;
            }
        } catch (error) {
            this.error = 'Failed to fetch ID format settings';
            console.error('Error fetching ID format settings:', error);
        }

        return createDefaultSettings();
    }

    private async refreshSettingsIfStale(forcedReload: boolean): Promise<void> {
        if (this.hasLoadedSettings && !forcedReload && !this.isCacheExpired()) {
            return;
        }
        const fetchedSettings = await this.fetchSettings();
        this.settings = this.sanitizeSettings(fetchedSettings);
        this.hasLoadedSettings = true;
        this.settingsLoadedAt = Date.now();
    }

    private getCacheTtlMs(): number {
        return Math.max(0, this.settingsCacheTtlSeconds) * 1000;
    }

    private isCacheExpired(): boolean {
        return Date.now() - this.settingsLoadedAt >= this.getCacheTtlMs();
    }

    private sanitizeSettings(settings: TypeIdFormatSettings): TypeIdFormatSettings {
        return {
            global: this.sanitizeSetting(settings.global),
            typeSpecific: {
                [TypeKind.LNodeType]: this.sanitizeSetting(settings.typeSpecific[TypeKind.LNodeType]),
                [TypeKind.DOType]: this.sanitizeSetting(settings.typeSpecific[TypeKind.DOType]),
                [TypeKind.DAType]: this.sanitizeSetting(settings.typeSpecific[TypeKind.DAType]),
                [TypeKind.EnumType]: this.sanitizeSetting(settings.typeSpecific[TypeKind.EnumType]),
            }
        };
    }

    /**
     * Sanitizes a single setting: disables reference format if the setting
     * itself is disabled, and clears reference format when not enabled.
     */
    private sanitizeSetting(setting: TypeIdFormatSetting): TypeIdFormatSetting {
        if (!setting.enabled) {
            return {
                enabled: false,
                format: null,
                referenceFormatEnabled: false,
                referenceFormat: null
            };
        }
        if (!setting.referenceFormatEnabled) {
            return {
                ...setting,
                referenceFormat: null
            };
        }
        return setting;
    }
}

const ID_SETTINGS_STATE_KEY = 'ID-SETTINGS-STATE';

export function setIdSettingsState() {
    return setContext(ID_SETTINGS_STATE_KEY, new IdFormatSettingsState());
}

export function getIdSettingsState(): IdFormatSettingsState {
    return getContext<IdFormatSettingsState>(ID_SETTINGS_STATE_KEY);
}
