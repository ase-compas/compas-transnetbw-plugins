import {
  createCustomResourceClient,
  createCustomResourceService,
} from '@oscd-transnet-plugins/api-compas-custom-resource';
import {
  createValidationLibraryClient,
  createValidationLibraryService,
} from '@oscd-transnet-plugins/api-compas-validation-library';
import { createValidationServiceClient } from '@oscd-transnet-plugins/api-compas-validation-service';
import { ProcessService } from './features/processes/process.service';
import { EngineeringWizardValidationLibrary } from './features/plugins/validation/library/engineeringWizardValidationLibrary';

const SCL_DATA_BASE: string =
  import.meta.env['VITE_COMPAS_SCL_DATA_SERVICE_BASE_URL'] ||
  '/compas-scl-data-service';

const VALIDATION_SERVICE_BASE: string =
  import.meta.env['VITE_COMPAS_VALIDATION_SERVICE_BASE_URL'] ||
  '/compas-validation-service';

const api = createCustomResourceClient(SCL_DATA_BASE);
const customResourceService = createCustomResourceService(api);

export const processService = new ProcessService(customResourceService);

export const validationLibraryService = createValidationLibraryService(
  createValidationLibraryClient(SCL_DATA_BASE),
);

export const engineeringWizardValidationLibrary = new EngineeringWizardValidationLibrary(
  validationLibraryService,
);

export const validationServiceClient = createValidationServiceClient({
  baseUrl: VALIDATION_SERVICE_BASE,
});
