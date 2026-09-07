import { describe, expect, it, vi } from 'vitest';
import type {
  ResolvedValidationPolicy,
  ResourceRef,
  ValidationLibraryService,
} from '@oscd-transnet-plugins/api-compas-validation-library';
import * as validationLibrary from '@oscd-transnet-plugins/api-compas-validation-library';
import { EngineeringWizardValidationLibrary } from './engineeringWizardValidationLibrary';
import { ENGINEERING_WIZARD_POLICY_NAME } from './naming';

describe('EngineeringWizardValidationLibrary', () => {
  it('resolves the one fixed, process-independent policy scoped to the given plugin', async () => {
    const service = {} as ValidationLibraryService;
    const resolved: ResolvedValidationPolicy = {
      policy: { name: ENGINEERING_WIZARD_POLICY_NAME, version: '1.0.0' },
      rules: [],
      problems: [],
    };
    const resolvePolicySpy = vi
      .spyOn(validationLibrary, 'resolvePolicy')
      .mockResolvedValue(resolved);

    const lib = new EngineeringWizardValidationLibrary(service);
    await expect(lib.resolvePolicy('plugin-a')).resolves.toBe(resolved);

    expect(resolvePolicySpy).toHaveBeenCalledWith(
      service,
      { name: ENGINEERING_WIZARD_POLICY_NAME, version: 'latest' } satisfies ResourceRef,
      { pluginId: 'plugin-a' },
    );
  });
});
