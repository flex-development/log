/**
 * @file logger
 * @module log/logger
 */

import createLogger from '#lib/create-logger'
import type { Logger } from '@flex-development/log'
import { FancyReporter } from '@flex-development/log/reporters'

/**
 * The default, pre-configured logger.
 *
 * Logs are written using the {@linkcode FancyReporter}.
 *
 * @see {@linkcode Logger}
 *
 * @const {Logger} logger
 */
const logger: Logger = createLogger({ reporters: new FancyReporter() })

export default logger
