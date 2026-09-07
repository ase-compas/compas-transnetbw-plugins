# `@oscd-transnet-plugins/api-compas-validation-library`

Typed client and resolver for the **CoMPAS Validation Library** — the shared,
versioned catalogue of SCL validation rules consumed by the Engineering Wizard
and the SCL Quality Guard.

> **Not published.** This package is `private: true` and has no publish target.
> See [Sharing across repositories](#sharing-across-repositories).

## Model

```
Policy ──▶ RuleSet ──▶ Rule
```

- **Rule** — one atomic check (currently `XPATH`: `context` + `assertion`).
- **RuleSet** — a named bundle of rules.
- **Policy** — binds rule sets, optionally scoped (`appliesTo`) and adjusted
  (`overrides`: change severity or disable a rule without copying it).

Every resource is stored as an opaque JSON blob in the scl-data-service under
the resource types `validation_rule`, `validation_ruleset` and
`validation_policy`. **Published versions are immutable** — a change means
publishing a new patch version. Every read fetches the newest version; version
pinning is intentionally not supported to keep the client simple.

## Usage

```ts
import {
  createValidationLibraryClient,
  createValidationLibraryService,
  resolvePolicy,
  toRulesJson,
} from '@oscd-transnet-plugins/api-compas-validation-library';

const service = createValidationLibraryService(
  createValidationLibraryClient('https://localhost/compas-scl-data-service', {
    accessToken: () => token,
  }),
);

const resolved = await resolvePolicy(service, 'process-policy', {
  pluginId: 'engineering-wizard',
  sclFileType: 'SCD',
});

if (resolved.problems?.length) {
  console.warn('Policy resolved with problems', resolved.problems);
}

// One batched request to the validation service instead of one per rule.
const rulesJson = toRulesJson(resolved.rules);
```

### Resolution semantics

`resolvePolicy` is deliberately **fault tolerant**, because the backend stores
blobs opaquely and cannot enforce referential integrity:

| Situation | Result |
| --- | --- |
| Rule set / rule reference dangling | `RULESET_NOT_FOUND` / `RULE_NOT_FOUND`, resolution continues |
| Same rule name from two rule sets | first wins, `DUPLICATE_RULE` |
| Override targets an unknown rule | `UNKNOWN_OVERRIDE` |
| Blob declares another major `schemaVersion` | `UNSUPPORTED_SCHEMA_VERSION` |
| Rule kind the caller cannot execute | `UNSUPPORTED_RULE_KIND` |
| Network / auth / parse failure | **throws** — never silently degraded |

An `appliesTo` entry with an empty array is treated as *no constraint*, so a
half-filled scope cannot silently disable a whole rule set. A rule disabled via
`enabled: false` is intentional configuration and is **not** reported as a
problem.

Rules referenced by several rule sets are fetched only once per resolution.

## Targets

```bash
npx nx run api-compas-validation-library:generate  # regenerate from docs/validation-library.yaml
npx nx run api-compas-validation-library:build
npx nx run api-compas-validation-library:test
npx nx run api-compas-validation-library:lint
```

`src/generated` is produced by openapi-generator and is not meant to be edited.
The canonical spec lives in `compas-scl-data-service/api/src/main/openapi/validation-library.yaml`;
`docs/validation-library.yaml` is a copy — keep them in sync.

## Sharing across repositories

The SCL Quality Guard lives in a different repository
(`compas-bearingpoint-plugins`), so it cannot import this library through the
Nx workspace. It consumes the **built output** through a `file:` dependency —
**do not publish to the public npm registry**:

```jsonc
// compas-bearingpoint-plugins/package.json
"dependencies": {
  "@oscd-transnet-plugins/api-compas-validation-library":
    "file:../compas-transnetbw-plugins/dist/libs/api/compas/validation-library"
}
```

This assumes both repositories are checked out side by side. npm resolves a
`file:` dependency to a **symlink**, so rebuilding this library is enough — no
reinstall is needed in the consumer:

```bash
# from compas-bearingpoint-plugins
npm run sync:validation-library
```

`file:` is preferred over `npm link` because it is declared in `package.json`:
it survives `npm install`, is visible in code review and can later be swapped
for a registry version by changing one line. `npm link` is undeclared global
state that silently disappears on the next install.

### Limitations

- The path is machine-relative, so this does **not** work in CI or in a Docker
  build. Those need a private registry, a git dependency or a packed tarball.
- The emitted JavaScript uses extension-less relative imports (a consequence of
  the openapi-generator output). Both consumers bundle with Vite, which
  resolves them; the package is *not* loadable by Node's native ESM resolver.
