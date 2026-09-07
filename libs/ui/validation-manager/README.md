# @oscd-transnet-plugins/ui-validation-manager

Reusable Svelte 5 components for browsing, editing and testing CoMPAS
validation policies + rules. The public surface (see `src/index.ts`):

- `<ValidationLibraryManager>` – full catalogue browser + single-policy view
- `<PolicyEditor>`, `<RuleSetEditor>`, `<CatalogueBrowser>` – the sub-views
- `<RuleEditorWizard>` – the 3-step wizard that produces a `RuleDraft`
- `validationEditor`, `initRuleEditor`, `parseAssertionToRuleUi`,
  `isExpertXPathParseable`, `buildAssertionExpression`, `lastNodeFromContext`

## Install

The library has **no external UI framework dependency** – text fields,
selects, radios, buttons and the spinner are self-contained primitives
under `src/lib/rule-editor/ui/`. Install is a single line:

```ts
import '@oscd-transnet-plugins/ui-validation-manager/theme.css';
```

`theme.css` declares every CSS custom property the library reads
(`--primary-base`, `--white`, `--base0..3`, `--ew-font-*`, `--vlm-accent`,
`--vlm-on-accent`) as `var(--token, <default>)` so:

- Hosts that ship their own tokens (e.g. TransnetBW's Engineering Wizard,
  which defines `--primary-base`, `--base0..3`, `--ew-font-*` in its
  `global.css`) automatically shadow the defaults.
- Hosts that ship nothing (e.g. SCL Quality Guard) still get a coherent
  brand-neutral look (slate primary `#37474f`, Inter font, neutral greys).

Both `:root` and `:host` are covered, so the library works inside a shadow
root (custom-element based OpenSCD plugins) as well as at the page root.

## Optional: rebranding

Override any token the theme file declares. The recommended minimum is:

```css
:root, :host {
  --primary-base: #4a7a7f;   /* your brand primary                   */
  --vlm-accent:   #4a7a7f;   /* modal/wizard header + Back/Next fill */
}
```

If your app already exposes `--primary-base` (Engineering Wizard does),
this step is unnecessary.

## Shadow DOM notes

Custom-element hosts must attach `theme.css` and the library's compiled
component styles **inside the shadow root** – styles injected into
`document.head` do not reach shadow DOM.

See
`compas-bearingpoint-plugins/apps/scl-quality-guard/src/plugin-wrapper.svelte.ts`
for a working pattern (side-effect CSS imports at the top of the plugin
entry, then a single `<link>` to the emitted `style.css` on the shadow root).
