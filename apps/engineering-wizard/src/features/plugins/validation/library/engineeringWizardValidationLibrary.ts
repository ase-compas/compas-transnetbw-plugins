import {
  resolvePolicy,
  type ResolvedValidationPolicy,
  type ValidationLibraryService,
} from '@oscd-transnet-plugins/api-compas-validation-library';
import { ENGINEERING_WIZARD_POLICY_NAME } from './naming';

/**
 * Read-side access to the Engineering Wizard's single fixed policy.
 * Editing rules/rule-sets is done through the shared ui-validation-manager
 * components; this class just hides the policy name + resolution options
 * from `editValidationHandler`.
 */
export class EngineeringWizardValidationLibrary {
  constructor(private readonly service: ValidationLibraryService) {}

  resolvePolicy(pluginId: string): Promise<ResolvedValidationPolicy> {
    return resolvePolicy(this.service, ENGINEERING_WIZARD_POLICY_NAME, { pluginId });
  }
}
