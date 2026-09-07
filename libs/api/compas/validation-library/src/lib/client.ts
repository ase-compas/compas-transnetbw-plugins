import {
  Configuration,
  type ConfigurationParameters,
  ValidationLibraryCommonApi,
  ValidationPoliciesApi,
  ValidationRulesApi,
  ValidationRulesetsApi,
} from '../generated';

/** The four generated API facades, sharing a single {@link Configuration}. */
export interface ValidationLibraryApis {
  common: ValidationLibraryCommonApi;
  rules: ValidationRulesApi;
  ruleSets: ValidationRulesetsApi;
  policies: ValidationPoliciesApi;
}

/**
 * Creates the generated API clients for the validation library.
 *
 * @param baseUrl base path of the scl-data-service, e.g.
 *   `https://localhost/compas-scl-data-service`
 * @param options extra configuration, most notably `accessToken` or a custom
 *   `fetchApi`/`middleware` for authentication.
 */
export function createValidationLibraryClient(
  baseUrl: string,
  options: Omit<ConfigurationParameters, 'basePath'> = {},
): ValidationLibraryApis {
  const configuration = new Configuration({ ...options, basePath: baseUrl });
  return {
    common: new ValidationLibraryCommonApi(configuration),
    rules: new ValidationRulesApi(configuration),
    ruleSets: new ValidationRulesetsApi(configuration),
    policies: new ValidationPoliciesApi(configuration),
  };
}
