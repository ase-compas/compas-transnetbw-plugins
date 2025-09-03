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
