/**
 * @file Configuration - Vite
 * @module config/vite
 * @see https://vite.dev/config
 */

import type { UserConfig } from 'vite'

/**
 * Vite configuration.
 *
 * @const {UserConfig} config
 */
const config: UserConfig = {
  resolve: { conditions: ['log', 'browser'] }
}

export default config
