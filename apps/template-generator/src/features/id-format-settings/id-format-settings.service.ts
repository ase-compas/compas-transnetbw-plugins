import { UploadDataContentTypeEnum, UploadDataNextVersionTypeEnum, type CustomResourceService, type PagedDataEntryResponse } from "@oscd-transnet-plugins/api-compas-custom-resource";
import type { TypeIdFormatSettings } from "./types";

export class IdFormatSettingsService {

    static CUSTOM_RESOURCE_TYPE = "template-generator-id-format-settings";
    static DATA_COMPATIBILITY_VERSION = "1.0.0";

    constructor(private customResourceService: CustomResourceService) {}

    /**
     * Get ID format settings.
     * @returns The ID format settings, or null if no settings exist or if there was an error parsing the settings. 
     */
    async getSettings(): Promise<TypeIdFormatSettings | null> {
        // fetch list of settings (should only be one)
        const settingsData: PagedDataEntryResponse = await this.customResourceService.listData({
            type: IdFormatSettingsService.CUSTOM_RESOURCE_TYPE,
            page: 0,
            size: 1
        });

        // if no settings exist, return null
        if (!settingsData?.content || settingsData.content.length === 0) {
            return null;
        }

        // fetch details
        const settingsId = settingsData.content[0].id;
        const settingsDetails = await this.customResourceService.getById(settingsId);
        if (!settingsDetails || !settingsDetails.content) {
            return null;
        }
        
        // parse content
        try {
            const settings: TypeIdFormatSettings = JSON.parse(settingsDetails.content);
            return settings;
        } catch (error) {
            console.error('Failed to parse ID format settings content:', error);
            return null;
        }
    }

    /**
     * Save ID format settings.
     * @param settings The ID format settings to save.
     */
    async saveSettings(settings: TypeIdFormatSettings): Promise<void> {
        const content = new Blob([JSON.stringify(settings)], { type: 'application/json' });

        await this.customResourceService.upload({
            type: IdFormatSettingsService.CUSTOM_RESOURCE_TYPE,
            name: 'id-format-settings',
            contentType: UploadDataContentTypeEnum.Json,
            content,
            dataCompatibilityVersion: IdFormatSettingsService.DATA_COMPATIBILITY_VERSION,
            nextVersionType: UploadDataNextVersionTypeEnum.Patch
        });
    }
}