/**
 * @file Type Aliases - ReportersOption
 * @module log/types/ReportersOption
 */

import type { Reporter } from '@flex-development/log/reporters'

/**
 * Union of values used to configure reporters.
 *
 * @see {@linkcode Reporter}
 */
type ReportersOption =
  | Reporter
  | Set<Reporter | false | null | undefined>
  | readonly (Reporter | false | null | undefined)[]

export type { ReportersOption as default }
