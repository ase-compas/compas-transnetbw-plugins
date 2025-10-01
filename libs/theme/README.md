# Theme

This is a CSS-only theme library providing color and typography variables for development. It also overrides styles of Svelte SMUI components to match the theme.

> *Note:* In production, this CSS should *not* be used — Compas SCD handles the actual theme.
 
## How to use

Use the theme variables in your app (Open SCD will set the colors to these variables).

Import the styles *only in development* into `App.svelte`:

```ts
if (import.meta.env.DEV) {
  import("../../../libs/theme/src/lib/theme-light.css")
}
```


## Variables 

```
--primary-base
--base03
--base02
--base01
--base00
--base0
--base1
--base2
--base3
--yellow
--orange
--red
--magenta
--violet
--blue
--cyan
--green
--white

```

