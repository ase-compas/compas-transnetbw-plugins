/**
 * Seeds the CoMPAS validation library with an example policy hierarchy.
 *
 * Intended for local development against compas-local-deployment. It publishes
 * atomic rules, bundles them into rule sets, binds those into two policies and
 * finally resolves both policies to prove the whole chain works end to end.
 *
 * Run with:
 *   npx nx run api-compas-validation-library:seed
 *
 * Configuration (all optional, defaults match compas-local-deployment):
 *   SCL_DATA_SERVICE_URL  base url of the scl-data-service
 *   KEYCLOAK_URL          keycloak base url
 *   KEYCLOAK_REALM        realm name
 *   KEYCLOAK_CLIENT_ID    client used for the password grant
 *   KEYCLOAK_USERNAME     user that holds PLUGINS_RESOURCES_CREATE
 *   KEYCLOAK_PASSWORD     password for that user
 */
import {
  createValidationLibraryClient,
  createValidationLibraryService,
  MANAGEMENT_SCHEMA_VERSION,
  resolvePolicy,
  toRulesJson,
  type ValidationLibraryService,
  type ValidationPolicyContent,
  type ValidationRuleContent,
  type ValidationRuleSetContent,
} from '../src/index';

const SCHEMA_VERSION = MANAGEMENT_SCHEMA_VERSION;

const config = {
  dataServiceUrl:
    process.env['SCL_DATA_SERVICE_URL'] ??
    'http://localhost:8080/compas-scl-data-service',
  keycloakUrl: process.env['KEYCLOAK_URL'] ?? 'http://localhost:8089/auth',
  realm: process.env['KEYCLOAK_REALM'] ?? 'compas',
  clientId: process.env['KEYCLOAK_CLIENT_ID'] ?? 'scl-data-service',
  username: process.env['KEYCLOAK_USERNAME'] ?? 'scl-data-editor',
  password: process.env['KEYCLOAK_PASSWORD'] ?? 'editor',
};

async function fetchAccessToken(): Promise<string> {
  const url = `${config.keycloakUrl}/realms/${config.realm}/protocol/openid-connect/token`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'password',
      client_id: config.clientId,
      username: config.username,
      password: config.password,
    }),
  });
  if (!response.ok) {
    throw new Error(
      `Could not obtain a token from ${url} (HTTP ${response.status}). ` +
        'Is compas-local-deployment running and are the credentials correct?',
    );
  }
  const body = (await response.json()) as { access_token?: string };
  if (!body.access_token) throw new Error('Token response contained no access_token');
  return body.access_token;
}

function rule(
  name: string,
  title: string,
  description: string,
  context: string,
  assertion: string,
  message: string,
  defaultSeverity: ValidationRuleContent['defaultSeverity'],
  tags: string[],
): ValidationRuleContent {
  return {
    schemaVersion: SCHEMA_VERSION,
    name,
    title,
    description,
    kind: 'XPATH',
    defaultSeverity,
    message,
    tags,
    definition: { context, assertion },
  };
}

/**
 * Minimal seed: a single rule, wrapped in a single rule set, bound to a single
 * policy. Enough to prove the publish/resolve chain works end to end without
 * cluttering the library with demo content.
 */
const RULES: ValidationRuleContent[] = [
  rule(
    'substation-required',
    'Substation Required',
    'Ensures the document contains at least one Substation element.',
    'SCL',
    'count(//Substation) > 0',
    'Document must contain at least one Substation element',
    'ERROR',
    ['substation', 'structure'],
  ),
];

const RULE_SETS: ValidationRuleSetContent[] = [
  {
    schemaVersion: SCHEMA_VERSION,
    name: 'substation-basics',
    title: 'Substation Basics',
    description: 'Structural checks every SCL document should satisfy.',
    tags: ['baseline'],
    rules: [{ name: 'substation-required', version: 'latest' }],
  },
];

const POLICIES: ValidationPolicyContent[] = [
  {
    schemaVersion: SCHEMA_VERSION,
    name: 'process-policy',
    title: 'Process Policy',
    description:
      'The single policy consumed by the Engineering Wizard while a process is running.',
    tags: ['engineering-wizard'],
    ruleSets: [
      {
        ref: { name: 'substation-basics', version: 'latest' },
        appliesTo: { pluginIds: ['engineering-wizard'] },
      },
    ],
  },
];

function isConflict(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    (error as { response?: { status?: number } }).response?.status === 409
  );
}

/**
 * Publishes a resource, treating an already existing version as success.
 *
 * Published versions are immutable, so re-running the seed must not fail; it
 * simply reports what was already there.
 */
async function publish(
  label: string,
  name: string,
  publisher: () => Promise<{ version?: string }>,
): Promise<void> {
  try {
    const response = await publisher();
    console.log(`  + ${label} "${name}" published as ${response.version ?? '?'}`);
  } catch (error) {
    if (isConflict(error)) {
      console.log(`  = ${label} "${name}" already exists at ${SCHEMA_VERSION}, skipped`);
      return;
    }
    throw error;
  }
}

async function seed(service: ValidationLibraryService): Promise<void> {
  console.log('Publishing rules...');
  for (const content of RULES) {
    await publish('rule', content.name, () => service.publishRule(content));
  }

  console.log('Publishing rule sets...');
  for (const content of RULE_SETS) {
    await publish('rule set', content.name, () => service.publishRuleSet(content));
  }

  console.log('Publishing policies...');
  for (const content of POLICIES) {
    await publish('policy', content.name, () => service.publishPolicy(content));
  }
}

async function report(service: ValidationLibraryService): Promise<void> {
  const scenarios = [{ policy: 'process-policy', pluginId: 'engineering-wizard' }];

  for (const { policy, pluginId } of scenarios) {
    const resolved = await resolvePolicy(service, policy, { pluginId });

    console.log(`\nResolved "${policy}" for ${pluginId}:`);
    for (const resolvedRule of resolved.rules) {
      console.log(
        `  - ${resolvedRule.name}@${resolvedRule.version} [${resolvedRule.severity}] ` +
          `via ${resolvedRule.origin?.ruleSet.name}`,
      );
    }
    for (const problem of resolved.problems ?? []) {
      console.log(`  ! ${problem.code}: ${problem.message}`);
    }
    console.log(`  rulesJson: ${toRulesJson(resolved.rules).length} bytes`);
  }
}

async function main(): Promise<void> {
  console.log(`Seeding validation library at ${config.dataServiceUrl}\n`);
  const accessToken = await fetchAccessToken();
  const service = createValidationLibraryService(
    createValidationLibraryClient(config.dataServiceUrl, { accessToken }),
  );

  await seed(service);
  await report(service);
  console.log('\nDone.');
}

main().catch((error: unknown) => {
  console.error('\nSeeding failed:', error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
