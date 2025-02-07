/**
 * @file createLogger
 * @module log/lib/createLogger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import COLOR_SUPPORTED from '#internal/color-supported'
import isLogObject from '#internal/is-log-object'
import merge from '#internal/merge'
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
  LogType,
  ReportersOption
} from '@flex-development/log'
import type { Reporter } from '@flex-development/log/reporters'
import { keys, ksort, type Fn } from '@flex-development/tutils'
import { ok } from 'devlop'
import isUnicodeSupported from 'is-unicode-supported'
import * as util from 'node-inspect-extracted'

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
   * Logger base.
   *
   * @const {Omit<Logger, LogType>} base
   */
  const base: Omit<Logger, LogType> = {
    browser: !!process.browser,
    color: COLOR_SUPPORTED,
    colors: {} as Colors,
    eol: options.eol ?? '\n',
    format: { ...options.format },
    inspect,
    level,
    levels: Object.freeze(logLevels),
    reporters: reporters(options.reporters),
    stderr: options.stderr ?? process.stderr,
    stdout: options.stdout ?? process.stdout,
    types: mergeTypes(options.types),
    unicode: isUnicodeSupported()
  }

  /**
   * Logger object.
   *
   * @const {Logger} logger
   */
  const logger: Logger = Object.defineProperties(base as Logger, {
    browser: {
      writable: false
    },
    color: {
      /**
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
       * @this {Logger}
       *
       * @return {Colors}
       *  Colorizer object
       */
      get(this: Logger): Colors {
        return createColors(this.color)
      }
    },
    level: {
      /**
       * @this {Logger}
       *
       * @return {LogLevel}
       *  Current log level
       */
      get(this: Logger): LogLevel {
        return level
      },
      /**
       * @this {Logger}
       *
       * @param {LogLevelOption | null | undefined} lvl
       *  Maximum log level (inclusive)
       * @return {undefined}
       */
      set(this: Logger, lvl: LogLevelOption | null | undefined): undefined {
        return void (level = normalizeLevel(this, lvl))
      }
    },
    levels: {
      writable: false
    },
    reporters: {
      writable: false
    },
    stderr: {
      enumerable: false
    },
    stdout: {
      enumerable: false
    }
  })

  logger.color = logger.format.colors
  logger.level = options.level

  for (const type of keys(logger.types)) {
    bind(logger, send, type)

    /**
     * @this {Logger}
     *
     * @param {any} message
     *  The message to write
     * @param {any[]} args
     *  Message arguments
     * @return {undefined}
     */
    function send(this: Logger, message: any, ...args: any[]): undefined {
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
 * @param {Fn} fn
 *  The function to bind
 * @param {keyof Logger} name
 *  Function name
 * @return {undefined}
 */
function bind(
  this: void,
  logger: Partial<Logger>,
  fn: Fn,
  name: keyof Logger
): undefined {
  Object.defineProperties(logger, {
    [name]: {
      enumerable: true,
      value: fn,
      writable: true
    }
  })

  Object.defineProperties(logger[name], { name: { value: name } })

  return void logger
}

/**
 * Use {@linkcode util.inspect} on `value` and print its string representation.
 *
 * @internal
 *
 * @this {Logger}
 *
 * @param {unknown} value
 *  The thing to inspect
 * @param {util.InspectOptions | null | undefined} [options]
 *  Inspect options
 * @return {undefined}
 */
function inspect(
  this: Logger,
  value: unknown,
  options?: util.InspectOptions | null | undefined
): undefined {
  /**
   * String representation of {@linkcode value}.
   *
   * @var {string} str
   */
  let str: string = util.inspect(value, merge({ colors: this.color }, options))

  if (!this.browser) str += this.eol

  return void this.stdout.write(str)
}

/**
 * Send a message to all reporters.
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
  const info: LogObject = merge({}, defaults)

  if (args.length === 1 && isLogObject(args[0])) {
    merge(info, args[0])
  } else {
    info.args = [...args]
  }

  if (!(normalizeLevel(this, info.level) > this.level)) {
    if ((info.message as unknown) instanceof Error) merge(info, info.message)
    if (!Array.isArray(info.args)) info.args = []

    if ('message' in info) info.args.unshift(info.message)
    delete info.message

    if (typeof info.additional === 'string' && info.additional as string) {
      info.additional = (info.additional as string).split(this.eol)
    }

    if (typeof info.type !== 'string') info.type = logTypes.log
    if (!(info.date instanceof Date)) info.date = new Date()

    info.level = normalizeLevel(this, info.level)
    ksort(info)

    for (const reporter of this.reporters) void reporter.report(info)
  }

  return void info
}

/**
 * Get a reporter instance list.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {ReportersOption | false | null | undefined} option
 *  User `reporters`
 * @return {Set<Reporter>}
 *  List of reporter instances
 */
function reporters(
  this: void,
  option: ReportersOption | false | null | undefined
): Set<Reporter> {
  /**
   * List of reporter instances.
   *
   * @const {Set<Reporter>} list
   */
  const list: Set<Reporter> = new Set<Reporter>()

  if (option) {
    if (!Array.isArray(option) && !(option instanceof Set)) {
      option = [option]
    }

    for (const reporter of option) {
      reporter && list.add(reporter)
    }
  }

  return list
}
