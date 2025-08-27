/**
 * @file Example
 * @module example
 */

import { logger } from '@flex-development/log'

logger.info('Using @flex-development/log 5.0.0')
logger.start('Building project...')
logger.warn('A new version of @flex-development/log is available: 5.0.1')
logger.success('Project built!')
logger.fail(new Error('This is an example error. Everything is fine!'))
