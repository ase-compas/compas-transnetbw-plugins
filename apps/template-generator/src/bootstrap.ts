import { createCustomResourceClient, createCustomResourceService } from "@oscd-transnet-plugins/api-compas-custom-resource";
import { DefaultTypeService } from "./features/default-types/service/default-type.service";
import { IdFormatSettingsService } from "./features/id-format-settings/id-format-settings.service";

const COMPAS_SCL_DATA_SERVICE_BASE_URL = import.meta.env.VITE_COMPAS_SCL_DATA_SERVICE_BASE_URL || "/compas-scl-data-service";

const customResourceApiClient = createCustomResourceClient(COMPAS_SCL_DATA_SERVICE_BASE_URL)
const customResourceService = createCustomResourceService(customResourceApiClient);
export const defaultTypeService = new DefaultTypeService(customResourceService);
export const idFormatSettingsService = new IdFormatSettingsService(customResourceService);