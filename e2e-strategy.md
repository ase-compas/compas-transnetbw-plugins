# E2E Test Strategy for CoMPAS Plugins

## Overview

This document describes how E2E tests for the CoMPAS plugins in this repo are structured, how plugins are published and versioned, and how tests are kept clean and deterministic.

The goal is to test each plugin against a real, running CoMPAS instance — with real authentication and real backend services — so that tests catch integration problems that unit or component tests cannot.

---

## Two Test Modes

| Mode | When to use | CoMPAS rebuild needed? |
|---|---|---|
| **Plugin-only** | Plugin changes, CoMPAS contracts unchanged | ❌ Use the stable staging instance, inject the new plugin URL |
| **Coupled** | Plugin needs new or changed CoMPAS events, APIs, or lifecycle hooks | ✅ Build and deploy a new CoMPAS version to staging first |

> E2E tests must always run against a real, running application. Checking build artifacts alone is not E2E testing.

---

## How Plugin Publishing Works

Plugins are published to the `published-plugins` branch and served via GitHub Pages. There are **two distinct URL tiers**:

### 1. Latest build (unversioned)
Every merge to `main` triggers the **Build and Deploy** workflow (`main.yml`), which builds all plugins and overwrites:
```
compas/plugins/<plugin-name>/index.js
```
This path is **not stable** — it reflects whatever was last merged to `main`. It is useful for development preview only.

### 2. Versioned release (immutable)
The **Release Plugin** workflow (`release-plugin.yml`) is triggered manually. It snapshots the current `index.js` and `style.css` from the flat path into a versioned subdirectory:
```
compas/plugins/<plugin-name>/<version>/index.js
```
The version is calculated by bumping the highest existing semver directory on `published-plugins` (MAJOR / MINOR / PATCH). Once published, a versioned path never changes.

**Always use versioned URLs in E2E tests.** The unversioned path is not safe between runs.

---

## Environment

CoMPAS has authentication, multiple backend microservices (SCL data service, validation service, and others), and persistent data. Fully mocking this for every test run would take more effort than it saves and would give less confidence.

**Use a persistent staging environment with all backend services running.**

The staging environment is what the test runner connects to. Each test run injects the plugin version under test and validates behaviour against real authentication and real data.

To manage the risks of a shared environment:
- Reset the environment to a known state before each run — see [Data Isolation and Cleanup](#data-isolation-and-cleanup).
- Do not deploy CoMPAS to staging while tests are running — coordinate this.
- Keep the CoMPAS version on staging pinned; only update it as a deliberate step.

Ephemeral containers are an option for plugins that make no backend calls and need strict isolation, but this should be the exception.

---

## How Plugin Loading Works

When CoMPAS starts, `open-scd.ts` reads the `"plugins"` key from `localStorage` and loads each active plugin via a dynamic `import(plugin.src)` call. The `src` URL controls which version gets loaded.

In tests, this is set programmatically before the page loads using `page.addInitScript` (Playwright) or `cy.visit` with `onBeforeLoad` (Cypress). Never click the "Add external plugin" button in the UI during tests — it is fragile.

---

## Plugin Version Tracking

A `plugin-versions.json` file in the E2E repo tracks the last known-good released version per plugin:
```json
{
  "engineering-wizard": "1.2.1",
  "template-generator": "2.2.0"
}
```

This is the single source of truth for "what is currently validated". It is updated automatically when a release passes E2E.

| Scenario | URL used | `plugin-versions.json` updated? |
|---|---|---|
| Released plugin | `compas/plugins/<name>/<version>/index.js` (from dispatch payload) | ✅ Yes, after smoke tests pass |
| PR preview | `compas/plugins/<name>/pr-<n>/index.js` (preview build) | ❌ No |
| Coupled release | versioned URL from dispatch, plus the matching CoMPAS version | ✅ Yes |
| Re-running full suite | versions read from `plugin-versions.json` | ❌ No |

**Never use the unversioned path** (`compas/plugins/<name>/index.js`) in tests. It is not stable between runs.

---

## Release Flow

```
1. Merge to main
   → main.yml builds all plugins
   → compas/plugins/<name>/index.js is updated on published-plugins (unversioned, unstable)

2. When ready to release a plugin version:
   → Manually trigger release-plugin.yml
   → Select plugin name and bump type (MAJOR / MINOR / PATCH)
   → Workflow snapshots index.js + style.css into compas/plugins/<name>/<version>/
   → Versioned URL is now stable and immutable

3. Dispatch the new version to the E2E repo
   → E2E constructs the versioned URL
   → Smoke tests run against staging
   → On pass: plugin-versions.json is updated
```

---

## Data Isolation and Cleanup

### The problem

Plugins interact with a growing number of backend services. Some only read data (history-viewer search, archive-explorer search). Others write.

Future plugins will likely write to additional services. Relying on per-service API-based cleanup (calling delete endpoints in teardown) has serious downsides:
- If a delete call fails, the next run starts with dirty state and tests fail for reasons unrelated to code changes.
- Not every service exposes a delete endpoint (the archiving API does not).
- Every new backend-writing plugin requires new cleanup code. The cleanup logic grows in lockstep with the number of services, and a bug in cleanup is itself a source of flaky tests.

### Recommended approach: reset the database before each run

Instead of cleaning up after, **reset the environment to a known baseline before each test run**. This guarantees a clean starting state regardless of what the previous run did, even if it crashed mid-run.

**How:**
1. **Database reset script.** CoMPAS backend services store data in a database. Create a script (or a dedicated endpoint behind an admin/test role) that truncates the test-relevant tables and re-inserts a fixed set of seed data. Run this script at the start of each E2E run — not at the end.
2. **Docker volume reset.** If the staging environment uses Docker Compose, an alternative is to stop the stack, drop and recreate the database volume, then start the stack with a seed SQL or migration script. This is slower but requires zero application-level cleanup code.
3. **Snapshot/restore.** If the database supports it, take a snapshot of the baseline state and restore it before each run. This works well with PostgreSQL (`pg_restore`). 

In all cases, the E2E pipeline does:
```
reset database to baseline (seed data) → inject plugin URL → run tests → report result
```
Teardown is not needed. If the run crashes, the next run resets anyway.

### Seed data

Tests that need pre-existing data (e.g. a specific SCL document to view in history-viewer) rely on **seed data** that is part of the baseline. This seed data is defined once, checked into the E2E repo (as SQL, JSON fixtures, or both), and applied during the reset step.

Never rely on data created by a previous run. Never rely on data that happened to exist on staging.

---

## CI Flow

**Plugin-only:**
```
plugin release → dispatch to E2E repo
  → reset database to baseline
  → inject versioned plugin URL
  → run smoke tests
  → on pass: update plugin-versions.json, report result
```

**Coupled (plugin + CoMPAS contract change):**
```
CoMPAS contract change → new CoMPAS version built and deployed to staging
plugin release (targeting that CoMPAS version) → dispatch to E2E repo
  → reset database to baseline
  → inject versioned plugin URL + CoMPAS version
  → run smoke tests
  → on pass: update plugin-versions.json, report result
```
CoMPAS must be deployed to staging **before** the E2E run starts.

**PR preview:** trigger E2E manually or automatically with the preview plugin URL against the current staging CoMPAS version. `plugin-versions.json` is not updated.

---

## Test Design

- One test file per plugin with its own self-contained setup.
- Start with smoke tests: the plugin loads, renders, and responds to a basic interaction with a known SCL fixture.
- SCL fixtures and seed data definitions are stored in the E2E repo.
- One core assertion per plugin: the single most important behaviour. This runs on every release.
- Use ARIA roles and visible labels for selectors — avoid deep shadow DOM paths where possible.
- Plugins must expose `data-testid` attributes on key elements — make this part of the plugin contract.

---

## Local Dev Loop

**Plugin-only:** start the stable CoMPAS image locally (or point at staging), set the plugin URL to your local build, run the tests, and iterate. CoMPAS does not need to restart between plugin changes. Run the database reset script before each local test session.

**Coupled:** build CoMPAS locally from the branch with the contract change, start it, and develop the plugin against it. Run E2E tests pointing at both local instances. When both are stable, cut releases for both and kick off the coupled CI flow.

---

## Architecture

| Repo                        | Responsibility |
|-----------------------------|---|
| `compas-demo-bearingpoint`  | Publishes versioned CoMPAS Docker images |
| `compas-transnetbw-plugins` | Builds and publishes plugins to `published-plugins` via GitHub Pages |
| `compas-e2e-tests`          | Connects to staging, injects plugin URL, runs tests, manages `plugin-versions.json` |

Plugin URL patterns:
```
# Versioned (stable — use in tests)
https://<host>/compas/plugins/<name>/<version>/index.js

# Latest build (unstable — development preview only)
https://<host>/compas/plugins/<name>/index.js
```

---

## Key Risks

| Risk | Mitigation |
|---|---|
| Release workflow not run after merging | Document clearly: merge to `main` only updates the unversioned path; a manual release step creates the versioned URL |
| Tests accidentally use the unversioned URL | Validate that all plugin URLs in test config contain a semver segment (lint or CI check) |
| Database reset fails | Treat as infrastructure failure, not test failure. Alert and retry. Keep the reset script simple and idempotent |
| Seed data drifts from what tests expect | Check seed data definitions into the E2E repo; update them alongside test changes |
| Staging shared with manual QA | Use a dedicated test instance for automated E2E, separate from the demo environment |
| GitHub Pages takes time to update after a release | Add a retry/wait step in CI before running tests |
| CoMPAS version on staging drifts unexpectedly | Pin it explicitly; only update as a deliberate step |
| CoMPAS and plugin released out of sync (coupled) | Require both to be ready before triggering the E2E run |
| localStorage injection fails without an obvious error | Verify the expected plugin element is registered before the test continues |
| Tests break due to shadow DOM selector changes | Require plugins to expose `data-testid` attributes as part of the plugin contract |
