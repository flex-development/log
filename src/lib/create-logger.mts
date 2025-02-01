/**
 * @file createLogger
 * @module log/lib/createLogger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import COLOR_SUPPORTED from '#internal/color-supported'
import isLogObject from '#internal/is-log-object'
import mergeTypes from '#internal/merge-types'
import normalizeLevel from '#internal/normalize-level'
import normalizeOptions from '#internal/normalize-options'
import process from '#internal/process'
import { createColors, type Colors } from '@flex-development/colors'
import type {
  InputLogObject,
  Logger,
  LoggerOptions,
  LogLevel,
  LogLevelOption,
  LogObject,
  LogType
} from '@flex-development/log'
import { keys, type Fn } from '@flex-development/tutils'
import { ok } from 'devlop'
import isUnicodeSupported from 'is-unicode-supported'

export default createLogger

/**
 * Create a logger.
 *
 * @see {@linkcode LoggerOptions}
 * @see {@linkcode Logger}
 *
 * @category
 *  core
 *
 * @this {void}
 *
 * @param {LogLevelOption | LoggerOptions | null | undefined} options
 *  Log level or configuration options
 * @return {Logger}
 *  Logger object
 */
function createLogger(
  this: void,
  options?: LogLevelOption | LoggerOptions | null | undefined
): Logger {
  options = normalizeOptions(options)

  /**
   * Current log level.
   *
   * @var {LogLevel} level
   */
  let level!: LogLevel

  /**
   * Logger object.
   *
   * @const {Logger} logger
   */
  const logger: Logger = Object.defineProperties({
    browser: false,
    color: true,
    colors: {},
    eol: options.eol ?? '\n',
    format: { ...options.format },
    level,
    levels: {},
    reporters: options.reporters ? [...options.reporters] : [],
    stderr: options.stderr ?? process.stderr,
    stdout: options.stdout ?? process.stdout,
    types: {},
    unicode: isUnicodeSupported()
  } as Logger, {
    browser: {
      value: !!process.browser,
      writable: false
    },
    color: {
      /**
       * Color logs enabled?
       *
       * @this {Logger}
       *
       * @return {boolean}
       *  `true` if color is enabled, `false` otherwise
       */
      get(this: Logger): boolean {
        ok(typeof this.format.colors === 'boolean', 'expected `format.colors`')
        return this.format.colors
      },
      /**
       * Enable or disable color logs.
       *
       * @this {Logger}
       *
       * @param {boolean | null | undefined} color
       *  Color logs enabled?
       * @return {undefined}
       */
      set(this: Logger, color: boolean | null | undefined): undefined {
        if (color === undefined) color = COLOR_SUPPORTED
        return void (this.format.colors = !!color && COLOR_SUPPORTED)
      }
    },
    colors: {
      /**
       * Get a colorizer.
       *
       * @this {Logger}
       *
       * @return {Colors}
       *  Color functions map
       */
      get(this: Logger): Colors {
        return createColors(this.color)
      }
    },
    level: {
      /**
       * Get the current log level.
       *
       * @this {Logger}
       *
       * @return {LogLevel}
       *  Current log level
       */
      get(this: Logger): LogLevel {
        return level
      },
      /**
       * Set the current log level.
       *
       * @this {Logger}
       *
       * @param {LogLevelOption | null | undefined} lvl
       *  New log level
       * @return {undefined}
       */
      set(
        this: Logger,
        lvl: LogLevelOption | null | undefined
      ): undefined {
        return void (level = this.normalizeLevel(lvl))
      }
    },
    levels: {
      value: Object.freeze(logLevels),
      writable: false
    },
    normalizeLevel: {
      enumerable: false,
      value: normalizeLevel
    },
    types: {
      /**
       * Get a map defining the log configuration for each log type.
       *
       * @this {Logger}
       *
       * @return {Record<LogType, InputLogObject>}
       *  Log type to configuration map
       */
      get(this: Logger): Record<LogType, InputLogObject> {
        return mergeTypes(options.types, this.unicode)
      }
    }
  })

  logger.format.columns ??= process.stdout.columns
  logger.format.date ??= true
  logger.format.icon ??= true

  logger.color = logger.format.colors
  logger.level = logger.normalizeLevel(options.level)

  for (const type of keys(logger.types)) {
    bind(logger, type, send)

    /**
     * @this {Logger}
     *
     * @param {unknown} message
     *  The message to write
     * @param {unknown[]} args
     *  Message arguments
     * @return {undefined}
     */
    function send(
      this: Logger,
      message: unknown,
      ...args: unknown[]
    ): undefined {
      return void report.call(this, this.types[type], [message, ...args])
    }
  }

  for (const reporter of logger.reporters) void reporter.init(logger)

  return logger
}

/**
 * Bind a function to `logger`.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Partial<Logger>} logger
 *  Logger object
 * @param {keyof Logger} name
 *  Function name
 * @param {Fn} fn
 *  The function to bind
 * @return {undefined}
 */
function bind(
  this: void,
  logger: Partial<Logger>,
  name: keyof Logger,
  fn: Fn
): undefined {
  Object.defineProperties(logger, {
    [name]: {
      enumerable: true,
      value: fn.bind(logger)
    }
  })

  Object.defineProperties(logger[name], { name: { value: name } })

  return void logger
}

/**
 * Send a message each log reporter.
 *
 * @internal
 *
 * @this {Logger}
 *
 * @param {InputLogObject} defaults
 *  Default log info
 * @param {unknown[]} args
 *  Message arguments
 * @return {undefined}
 */
function report(
  this: Logger,
  defaults: InputLogObject,
  args: unknown[]
): undefined {
  /**
   * Log info.
   *
   * @const {LogObject} info
   */
  const info: LogObject = {
    ...defaults,
    additional: defaults.additional ?? [],
    args: defaults.args ?? [],
    date: defaults.date ?? new Date(),
    format: defaults.format ?? {},
    level: this.normalizeLevel(defaults.level),
    type: defaults.type as unknown as LogType
  } as LogObject

  if (!(info.level > this.level)) {
    if (args.length === 1 && isLogObject(args[0])) {
      Object.assign(info, args[0])
    } else {
      info.args = [...args]
    }

    if (typeof info.message === 'string' && info.message as string) {
      info.args.unshift(info.message)
      delete info.message
    }

    if (typeof info.additional === 'string' && info.additional as string) {
      info.additional = (info.additional as string).split(this.eol)
    }

    if (typeof info.type !== 'string') info.type = logTypes.log
    if (info.color === undefined) info.color = this.types[info.type].color
    if (info.icon === undefined) info.icon = this.types[info.type].icon

    for (const reporter of this.reporters) void reporter.report(info)
  }

  return void info
}
