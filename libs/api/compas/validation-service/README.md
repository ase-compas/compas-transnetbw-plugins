# @oscd-transnet-plugins/api-compas-validation-service

Thin HTTP client for the `compas-validation-service` XPath endpoint.

Consumers create one client at plugin bootstrap and share it across the
plugin. The client is intentionally framework-agnostic and injectable
(`fetch`, `getAuthToken`) so the same package is used by both
`engineering-wizard` (compas-transnetbw-plugins) and `scl-quality-guard`
(compas-bearingpoint-plugins).

```ts
import { createValidationServiceClient } from '@oscd-transnet-plugins/api-compas-validation-service';

const client = createValidationServiceClient({
  baseUrl: '/compas-validation-service',
});

const result = await client.validateResolvedRules(rules, sclContent);
```

Rule shaping (`toXPathValidationServiceRules`, `draftToServiceRule`) lives
in `@oscd-transnet-plugins/api-compas-validation-library` because that is
where the rule model itself is defined; this package only owns the
transport.
