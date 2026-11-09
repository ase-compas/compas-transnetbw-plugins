# CoMPAS TransnetBW Plugins

A Svelte/Vite monorepo of TransnetBW plugins for CoMPAS, managed with Nx.
Shared UI components, API clients and utilities live in `libs/`, imported through
TypeScript path aliases. App-specific Vite configuration lives in `apps/<app>/`.

## Apps in this workspace

- `engineering-wizard`: engineering workflows
- `template-generator`: template creation and management
- `history-viewer`: historical data
- `archive-explorer`: archive browsing and retrieval
- `location-viewer`: location details
- `location-manager`: locations and metadata
- `tsld`: single-line diagram utilities

## Setup and commands

Requires npm and Node.js 20+ (Happy DOM requires Node 20).
API client generation also requires Java 11+ on `PATH`.
Install dependencies with `npm install`.

| Command                                 | Purpose                                                          |
| --------------------------------------- | ---------------------------------------------------------------- |
| `npm run run:<app>`                     | Vite dev server with HMR                                         |
| `npm run build:<app>`                   | Build one plugin into `dist/apps/<app>/`                         |
| `npm run preview:<app>`                 | Build and serve a plugin for CoMPAS integration                  |
| `npm run build`                         | Regenerate History/Archiving clients and build all seven plugins |
| `npm run mock-server`                   | Start the local API mock (`mocks/server.js`)                     |
| `npm run generate:history-api-client`   | Regenerate the History API client                                |
| `npm run generate:archiving-api-client` | Regenerate the Archiving API client                              |

Replace `<app>` with a workspace app name; npm run/preview scripts exist for
all listed apps except `tsld` (use Nx directly). For example:

```sh
npm run run:engineering-wizard
npm run build:template-generator
npm run preview:engineering-wizard
# Equivalent direct Nx target; override the preview port:
npx nx run engineering-wizard:preview --port=4300
```

Nx targets are also available as `npx nx run <project>:<target>`.
For integration, point CoMPAS at the preview URL printed in the terminal.
Preview is a local integration server, not a production deployment: changes must
be built and released to update distributions pinned to older plugin URLs/hashes.

## Engineering Wizard validation

Deploy Validation Service **2.0.0** before the updated wizard. It uses typed
XPath rules and no longer calls the legacy endpoint.

| POST endpoint                      | Behavior                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `/api/validation-rules/validation` | Expert-mode syntax check after 500 ms without edits; no SCL required.                         |
| `/api/scl-resources/validation`    | One SCL upload with all rules across the process; single-rule Run/dialog tests send one rule. |

In expert mode, Next/Save requires successful compilation of the current
`context` and `assert`. Edits invalidate previous checks; stale responses are
ignored. Syntax requests time out after 30 seconds; errors allow retry.
Compilation does not prove that the separate document test will pass.

Process start validates all plugins; document changes trigger debounced
whole-process revalidation. No rules means no request. Results map back to plugins
by submitted rule index, so duplicate titles are safe and all plugin statuses
remain visible. Outcomes distinguish passed, violated, invalid and unevaluable
rules; syntax/evaluation errors do not stop other rules. A plugin only passes
when all its rules pass. Request failures affect all submitted rules; retry
repeats the whole process request. HTTP `413` responses may have an empty body.

Build-time endpoint settings default to the same-origin gateway:

| Environment variable            | Default                                                      |
| ------------------------------- | ------------------------------------------------------------ |
| `VITE_SCL_VALIDATION_API_URL`   | `/compas-validation-service/api/scl-resources/validation`    |
| `VITE_VALIDATION_RULES_API_URL` | `/compas-validation-service/api/validation-rules/validation` |

Development overrides: `apps/engineering-wizard/.env.development`. For custom
endpoints, replace the old `VITE_VALIDATION_API_URL` with both settings above.
Cross-origin development requires matching CORS/authentication configuration.
The backend requires `SCL_VALIDATION`; the wizard retains fetch/gateway
authentication and does not store bearer tokens.

## Plugin color roles

Engineering Wizard and Template Generator share `libs/theme/src/lib/plugin-theme.css`,
loaded inside plugin shadow roots and by standalone entry points. For each
palette input, `--oscd-theme-*` takes precedence over `--oscd-*`, followed by
light/dark defaults. Host navigation tokens are not used.

| Plugin role                   | Host input                    | Usage                                                |
| ----------------------------- | ----------------------------- | ---------------------------------------------------- |
| `--oscd-plugin-action`        | `--oscd-secondary`            | Primary CTA fills and interactive accents            |
| `--oscd-plugin-brand`         | `--oscd-primary`              | Structural headers, selected cards and brand accents |
| `--oscd-plugin-text`          | `--oscd-base03`               | Headings and body text                               |
| `--oscd-plugin-text-muted`    | `--oscd-base01`               | Secondary text                                       |
| `--oscd-plugin-surface`       | `--oscd-base3`                | Content surfaces                                     |
| `--oscd-plugin-surface-muted` | `--oscd-base2`                | Muted cards and chips                                |
| `--oscd-plugin-on-action`     | `--oscd-base3`                | Ink on action fills                                  |
| `--oscd-plugin-on-brand`      | `--oscd-base3`                | Ink on brand fills                                   |
| `--oscd-plugin-error`         | `--oscd-error` / `--oscd-red` | Error states                                         |

**Brand = primary; action = secondary** is this pair of plugins' convention,
not a universal OpenSCD rule. Wizard action colors cover enabled external-plugin
add buttons, active steps/chips and Done; structural stepper backgrounds use
brand, disabled controls stay muted. Text and neutral surfaces adapt to light/dark
mode. Preserve disabled/destructive states and use contrasting fill/ink pairs:
arbitrary customer colors cannot guarantee contrast.

The adapter maps roles to SMUI `--mdc-*` variables and retains `--primary-base`
as a **brand**, not action, alias. Use role tokens in new styles, not primary as
a general text/surface color; the host's `--primary` is unchanged. External
plugins receive restored host Material mappings at the Wizard mount boundary;
Wizard loading/error controls keep its own palette. Plugins without the adapter
retain their Material defaults.

Material hover/focus/pressed layers follow local button colors, without a global
state-layer override. Keyboard focus has an explicit outline; native-button
pressed styles exclude Material buttons to avoid gray CTA fills.

`OscdBaseDialog` and `OscdConfirmDialog` use brand headers and action confirm
buttons. Independent `headerColor` / `confirmButtonColor` overrides take
precedence over legacy `color`, which still overrides both regions. Explicit
colors use white text/close icons in both modes and must contrast with white;
otherwise on-brand/on-action roles apply.
