import { UploadDataContentTypeEnum, UploadDataNextVersionTypeEnum, type CustomResourceService } from "@oscd-transnet-plugins/api-compas-custom-resource";
import type { TypeIdFormatSettings } from "./types";

export class IdFormatSettingsService {

    static CUSTOM_RESOURCE_TYPE = "template-generator-id-format-settings";
    static DATA_COMPATIBILITY_VERSION = "1.0.0";
    static RESOURCE_NAME = "id-format-settings";

    constructor(private customResourceService: CustomResourceService) {}

    /**
     * Get ID format settings.
     * @returns The ID format settings, or null if no settings exist or if there was an error parsing the settings. 
     */
    async getSettings(): Promise<TypeIdFormatSettings | null> {
        try {
            const settingsDetails = await this.customResourceService.getLatestByTypeAndName(
                IdFormatSettingsService.CUSTOM_RESOURCE_TYPE,
                IdFormatSettingsService.RESOURCE_NAME
            );

            if (!settingsDetails || !settingsDetails.content) {
                return null;
            }

            const settings: TypeIdFormatSettings = JSON.parse(settingsDetails.content);
            return settings;
        } catch (error) {
            if (this.isNotFoundError(error)) {
                return null;
            }
            console.error('Failed to get ID format settings:', error);
            return null;
        }
    }

    private isNotFoundError(error: unknown): boolean {
        return (
            error != null &&
            typeof error === 'object' &&
            'response' in error &&
            (error as { response: Response }).response?.status === 404
        );
    }

    /**
     * Save ID format settings.
     * @param settings The ID format settings to save.
     */
    async saveSettings(settings: TypeIdFormatSettings): Promise<void> {
        const content = new Blob([JSON.stringify(settings)], { type: 'application/json' });

        await this.customResourceService.upload({
            type: IdFormatSettingsService.CUSTOM_RESOURCE_TYPE,
            name: IdFormatSettingsService.RESOURCE_NAME,
            contentType: UploadDataContentTypeEnum.Json,
            content,
            dataCompatibilityVersion: IdFormatSettingsService.DATA_COMPATIBILITY_VERSION,
            nextVersionType: UploadDataNextVersionTypeEnum.Patch
        });
    }

    /**
     * Delete ID format settings.
     */
    async deleteSettings(): Promise<void> {
        await this.customResourceService.deleteByTypeAndName(
            IdFormatSettingsService.CUSTOM_RESOURCE_TYPE,
            IdFormatSettingsService.RESOURCE_NAME
        );
    }
}