import type { IdFormat } from '@oscd-transnet-plugins/oscd-services/id-generator';

/** Prefix used for OSCd node IDs */
const OSCD_PREFIX = '$oscd$_';

/** OSCD instance prefix id format.
 *
 * This format requires the context to provide a variable named `'instance'`.
 *
 * - **Format:** `<INSTANCE>$oscd$_<UUID>`
 * - **Example:** `LLN0$oscd$_1234561b3ef`
*/
export const OSCD_INSTANCE_PREFIX_ID_FORMAT: IdFormat = {
  segments: [
    { type: 'VARIABLE', value: 'instance' },
    { type: 'TEXT', value: OSCD_PREFIX },
    { type: 'UUID' }
  ]
};

/**
 * OSCD reference prefix id format.
 *
 * Requires a 'reference' variable in the context.
 *
 * - **Format:** `<REFERENCE>$oscd$_<UUID>`
 * - **Example:** `Beh$oscd$_1234561b3ef`
 */
export const OSCD_REFERENCE_PREFIX_ID_FORMAT: IdFormat = {
  segments: [
    { type: 'VARIABLE', value: 'reference' },
    { type: 'TEXT', value: OSCD_PREFIX },
    { type: 'UUID' }
  ]
}
