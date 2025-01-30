/**
 * @file Internal - mergeTypes
 * @module log/internal/mergeTypes
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import icon from '#internal/icon'
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
 * @param {boolean} unicode
 *  Unicode supported?
 * @return {Record<LogType, InputLogObject>}
 *  Log type to configuration map
 */
function mergeTypes(
  this: void,
  types: Partial<Record<LogType, InputLogObject>> | null | undefined,
  unicode: boolean
): Record<LogType, InputLogObject> {
  /**
   * Checkmark icon.
   *
   * @const {string} check
   */
  const check: string = icon('✔', '√', unicode)

  /**
   * Failure icon.
   *
   * @const {string} x
   */
  const x: string = icon('✖', '×', unicode)

  /**
   * Default log type to configuration map.
   *
   * @const {Record<LogType, InputLogObject>} defaults
   */
  const defaults: Record<LogType, InputLogObject> = {
    [logTypes.debug]: {
      color: 'gray',
      icon: icon('⚙', 'D', unicode),
      level: logLevels.debug,
      type: logTypes.debug
    },
    [logTypes.error]: {
      color: 'red',
      icon: x,
      level: logLevels.error,
      type: logTypes.error
    },
    [logTypes.fail]: {
      color: 'red',
      icon: x,
      level: logLevels.error,
      type: logTypes.fail
    },
    [logTypes.info]: {
      color: 'cyan',
      icon: icon('ℹ', 'i', unicode),
      level: logLevels.info,
      type: logTypes.info
    },
    [logTypes.inspect]: {
      level: logLevels.log,
      type: logTypes.inspect
    },
    [logTypes.log]: {
      level: logLevels.log
    },
    [logTypes.ready]: {
      color: 'green',
      icon: check,
      level: logLevels.info,
      type: logTypes.ready
    },
    [logTypes.start]: {
      color: 'magenta',
      icon: icon('◐', 'o', unicode),
      level: logLevels.info,
      type: logTypes.start
    },
    [logTypes.success]: {
      color: 'green',
      icon: check,
      level: logLevels.info,
      type: logTypes.success
    },
    [logTypes.trace]: {
      icon: icon('→', '→', unicode),
      level: logLevels.trace,
      type: logTypes.trace
    },
    [logTypes.warn]: {
      color: 'yellow',
      icon: icon('▲', '‼', unicode),
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
