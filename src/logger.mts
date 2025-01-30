/**
 * @file logger
 * @module log/logger
 */

import createLogger from '#lib/create-logger'
import type { Logger } from '@flex-development/log'

/**
 * Default logger.
 *
 * @see {@linkcode Logger}
 *
 * @const {Logger} logger
 */
const logger: Logger = createLogger()

export default logger
