# CoMPAS TransnetBW Plugins

A monorepo containing Svelte/Vite applications and supporting libraries that extend CoMPAS with TransnetBW-specific plugins and tools. The workspace is managed with Nx and contains multiple apps that can be developed, built, and previewed independently.

## Apps in this workspace

- engineering-wizard – Engineering workflow helper UI
- template-generator – Template creation and management
- history-viewer – View and explore historical data
- archive-explorer – Browse and fetch archives
- location-viewer – View locations and details
- location-manager – Manage locations and metadata
- tsld – Single line diagram utilities

Libraries live under libs/ and provide shared UI components, API clients, and utilities.

## Prerequisites

- Node.js 18+ and npm

## Install

```sh
npm install
```

## Develop (Svelte dev server)

Run a dev server for an app (HMR enabled):

```sh
# Examples
npm run run:engineering-wizard
npm run run:template-generator
npm run run:history-viewer
npm run run:archive-explorer
npm run run:location-viewer
npm run run:location-manager
```

These commands use Nx to start Vite in dev mode for the selected app.

## Build

Build all apps and libraries:

```sh
npm run build
```

Build a single app:

```sh
# Examples
npm run build:engineering-wizard
npm run build:template-generator
npm run build:history-viewer
npm run build:archive-explorer
npm run build:location-viewer
npm run build:location-manager
npm run build:tsld
```

Build artifacts are emitted to dist/apps/<app-name>.

## Plugin color roles

Engineering Wizard and Template Generator share
`libs/theme/src/lib/plugin-theme.css`. Their plugin wrappers load it inside the
shadow root, and their standalone entry points load the same stylesheet.
The adapter consumes the host's resolved `--oscd-*` palette. Customer
`--oscd-theme-*` inputs and light/dark defaults are fallbacks for standalone use.
Plugins do not use the host's navigation tokens.

| Plugin role | Host input | Usage |
| --- | --- | --- |
| `--oscd-plugin-action` | `--oscd-secondary` | Primary CTA fills and interactive accents |
| `--oscd-plugin-brand` | `--oscd-primary` | Structural headers, selected cards and brand accents |
| `--oscd-plugin-text` | `--oscd-base03` | Headings and body text |
| `--oscd-plugin-text-muted` | `--oscd-base01` | Secondary text |
| `--oscd-plugin-surface` | `--oscd-base3` | Content surfaces |
| `--oscd-plugin-surface-muted` | `--oscd-base2` | Muted cards and chips |
| `--oscd-plugin-on-action` | `--oscd-base3` | Ink on action fills |
| `--oscd-plugin-on-brand` | `--oscd-base3` | Ink on brand fills |
| `--oscd-plugin-error` | `--oscd-error` / `--oscd-red` | Error states |

Primary supplies branding and secondary supplies actions in these two plugins.
This is their shared convention, not a universal OpenSCD role definition.

Text and neutral surfaces adapt together in light and dark mode. Material's
hover, focus and pressed layers follow each button's local colors; no global
state-layer color is imposed. Keyboard focus has an explicit outline. The
native-button pressed fill excludes Material buttons in both apps so it does
not replace their CTA fill with gray.

The adapter maps these roles into SMUI's `--mdc-*` variables. The legacy
`--primary-base` alias is retained for shared components but means structural
branding, not the action accent. New component styles should use the role tokens
directly, never use primary as a general text/surface color, and preserve disabled
and destructive-action states. Choose host fill/ink pairs with sufficient contrast;
the plugin cannot guarantee text contrast for arbitrary customer colors.
The host's `--primary` alias is not redefined. Engineering Wizard restores the
host's Material mappings at the external-plugin mount boundary; its loading and
error controls retain the wizard's own palette.

Engineering Wizard also uses the action role for enabled external-plugin add
buttons, active process steps and plugin chips, and Done buttons. Disabled
controls remain muted; structural stepper backgrounds retain the brand role.

`OscdBaseDialog` and `OscdConfirmDialog` have independent `headerColor` and
`confirmButtonColor` overrides. Their defaults use the brand and action roles,
respectively. The existing explicit `color` prop remains a backwards-compatible
override for both regions; the new individual overrides take precedence.
Explicit color overrides retain white text and close icons in both modes, so
callers must choose backgrounds that contrast with white. Without an explicit
color, the theme's on-brand/on-action roles apply. Other
plugins that do not load the adapter retain their existing Material defaults.

Source changes must be built and released before a distribution pinned to older
plugin URLs/hashes can consume them; this does not happen automatically.

## Preview (serve for CoMPAS integration)

Preview serves a built app on a local HTTP port. Use this when integrating the plugin into a running CoMPAS instance (point CoMPAS to the preview URL).

```sh
# Examples
nx run engineering-wizard:preview
nx run template-generator:preview
```

Notes:
- Some preview convenience scripts exist, e.g. `npm run preview:engineering-wizard`, `npm run preview:template-generator`.
- You can pass Vite preview flags after `--`, for example to choose a port: `nx run engineering-wizard:preview -- --port 4300`.
- The terminal will print the local URL to use inside CoMPAS.

## Useful scripts

- npm run mock-server – Starts a simple local API mock (mocks/server.js)
- npm run generate:history-api-client – Regenerates the History API client (used by apps)
- npm run generate:archiving-api-client – Regenerates the Archiving API client (used by apps)

## Notes

- This is an Nx workspace; you can also use `nx run <project>:<target>` directly.
- Vite configuration for each app lives under apps/<app-name>.
- Libraries are consumed by apps via standard Nx TypeScript path aliases.
