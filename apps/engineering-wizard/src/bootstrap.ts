import {
  createCustomResourceClient,
  createCustomResourceService,
} from '@oscd-transnet-plugins/api-compas-custom-resource';
import { ProcessService } from './features/processes/process.service';

const BASE: string =
  import.meta.env['VITE_COMPAS_SCL_DATA_SERVICE_BASE_URL'] ||
  '/compas-scl-data-service';

const api = createCustomResourceClient(BASE);
const customResourceService = createCustomResourceService(api);

export const processService = new ProcessService(customResourceService);
