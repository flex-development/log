/**
 * @file Internal - mergeTypes
 * @module log/internal/mergeTypes
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import merge from '#internal/merge'
import type { InputLogObject, LogType } from '@flex-development/log'

/**
 * Create a log type to configuration map.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Partial<Record<LogType, InputLogObject>> | null | undefined} types
 *  User log type to config map
 * @return {Record<LogType, InputLogObject>}
 *  Log type to configuration map
 */
function mergeTypes(
  this: void,
  types: Partial<Record<LogType, InputLogObject>> | null | undefined
): Record<LogType, InputLogObject> {
  /**
   * Default log type to configuration map.
   *
   * @const {Record<LogType, InputLogObject>} defaults
   */
  const defaults: Record<LogType, InputLogObject> = {
    [logTypes.debug]: {
      level: logLevels.debug,
      type: logTypes.debug
    },
    [logTypes.error]: {
      level: logLevels.error,
      type: logTypes.error
    },
    [logTypes.fail]: {
      level: logLevels.fail,
      type: logTypes.fail
    },
    [logTypes.fatal]: {
      level: logLevels.fatal,
      type: logTypes.fatal
    },
    [logTypes.info]: {
      level: logLevels.info,
      type: logTypes.info
    },
    [logTypes.log]: {
      level: logLevels.log
    },
    [logTypes.ready]: {
      level: logLevels.ready,
      type: logTypes.ready
    },
    [logTypes.start]: {
      level: logLevels.start,
      type: logTypes.start
    },
    [logTypes.success]: {
      level: logLevels.success,
      type: logTypes.success
    },
    [logTypes.trace]: {
      level: logLevels.trace,
      type: logTypes.trace
    },
    [logTypes.warn]: {
      level: logLevels.warn,
      type: logTypes.warn
    },
    [logTypes.verbose]: {
      level: logLevels.verbose,
      type: logTypes.verbose
    }
  }

  return merge(defaults, { ...types })
}

export default mergeTypes
