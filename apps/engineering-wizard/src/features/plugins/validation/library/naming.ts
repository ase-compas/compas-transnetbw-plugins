/**
 * Fixed name of the single validation policy the Engineering Wizard
 * consumes. Not bound to any process; per-plugin scoping happens via
 * rule sets' `appliesTo.pluginIds`.
 *
 * Display names for rules/policies/rule sets are chosen by the user and
 * slugified into backend names by `deriveResourceName` / `slugify` in
 * `@oscd-transnet-plugins/ui-validation-manager`.
 */
export const ENGINEERING_WIZARD_POLICY_NAME = 'ew-policy';
