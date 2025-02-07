/**
 * @file Reporters - FancyReporter
 * @module log/reporters/FancyReporter
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import icon from '#internal/icon'
import merge from '#internal/merge'
import BaseReporter from '#reporters/base.reporter'
import { stripAnsi, type Color } from '@flex-development/colors'
import type {
  InputLogObject,
  LogFormatOptions,
  Logger,
  LogLevel,
  LogObject,
  LogType
} from '@flex-development/log'
import { ok } from 'devlop'

/**
 * Fancy log reporter.
 *
 * @see {@linkcode BaseReporter}
 *
 * @category
 *  reporters
 *
 * @class
 * @extends {BaseReporter}
 */
class FancyReporter extends BaseReporter {
  /**
   * Record, where each key is a log type and each value is an icon.
   *
   * @see {@linkcode LogType}
   *
   * @public
   * @instance
   * @member {Partial<Record<LogType, string>>} icons
   */
  public icons!: Partial<Record<LogType, string>>

  /**
   * Record, where each key is a log level and each value is a color.
   *
   * @see {@linkcode Color}
   * @see {@linkcode LogLevel}
   *
   * @public
   * @instance
   * @member {Partial<Record<LogLevel, Color>>} levelColors
   */
  public levelColors!: Partial<Record<LogLevel, Color>>

  /**
   * Record, where each key is a log type and each value is a color.
   *
   * @see {@linkcode Color}
   * @see {@linkcode LogType}
   *
   * @public
   * @instance
   * @member {Partial<Record<LogType, Color>>} typeColors
   */
  public typeColors!: Partial<Record<LogType, Color>>

  /**
   * Format a badge.
   *
   * @see {@linkcode LogFormatOptions}
   * @see {@linkcode LogObject}
   *
   * @protected
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @param {LogFormatOptions} options
   *  Log format options
   * @return {string}
   *  Formatted badge or empty string
   */
  protected badge(info: LogObject, options: LogFormatOptions): string {
    /**
     * Formatted badge.
     *
     * @var {string} badge
     */
    let badge: string = ''

    if (options.badge !== null) {
      if (options.badge ?? info.level < this.logger.levels.warn) {
        /**
         * Color name.
         *
         * @const {Color | null | undefined} color
         */
        const color: Color | null | undefined = info.color ||
          this.typeColors[info.type] ||
          this.levelColors[info.level]

        badge = this.colors.black(` ${info.type.toUpperCase()} `)
        badge = this.bg(color)(badge)
      }
    }

    return badge
  }

  /**
   * Format special character sequences.
   *
   * This includes:
   *  - highlighting inline code
   *
   * @protected
   * @instance
   *
   * @param {string} string
   *  The string containing special character sequences
   * @return {string}
   *  `string` with special character sequences formatted
   */
  protected characters(string: string): string {
    return string.replace(/`([^`]+)`/gm, (_, m) => this.colors.cyan(m))
  }

  /**
   * Format an icon.
   *
   * @see {@linkcode LogFormatOptions}
   * @see {@linkcode LogObject}
   *
   * @protected
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @param {LogFormatOptions} options
   *  Log format options
   * @return {string}
   *  Formatted icon or empty string
   */
  protected icon(info: LogObject, options: LogFormatOptions): string {
    /**
     * Formatted icon.
     *
     * @var {string} icon
     */
    let icon: string = ''

    if (options.icon) {
      if (info.icon) {
        icon = info.icon
      } else if (typeof this.icons[info.type] === 'string') {
        icon = this.icons[info.type]!
      } else {
        icon = info.type
      }

      if (icon) {
        icon = this.color(
          info.color,
          this.typeColors[info.type] || this.levelColors[info.level]
        )(icon)
      }
    }

    return icon
  }

  /**
   * Format log `info`.
   *
   * @see {@linkcode LogObject}
   *
   * @protected
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @return {string}
   *  Log message string
   */
  protected info(info: LogObject): string {
    /**
     * Formatting options.
     *
     * @const {LogFormatOptions} options
     */
    const options: LogFormatOptions = this.options(info)

    /**
     * Maximum number of columns to output.
     *
     * @const {number} columns
     */
    const columns: number = options.columns ?? 0

    /**
     * Formatted badge.
     *
     * @const {string} badge
     */
    const badge: string = this.badge(info, options)

    /**
     * Formatted date.
     *
     * @const {string} date
     */
    const date: string = this.date(info, options)

    /**
     * Formatted icon.
     *
     * @const {string} icon
     */
    const icon: string = this.icon(info, options)

    /**
     * Formatted tag.
     *
     * @const {string} tag
     */
    const tag: string = this.tag(info)

    /**
     * Formatted log type.
     *
     * @const {string} type
     */
    const type: string = badge || icon

    /**
     * Log message lines.
     *
     * @const {string[]} lines
     */
    const lines: string[] = this.lines(info, {
      ...options,
      indent: !badge && icon && info.type !== stripAnsi(icon)
        ? this.width(icon) + 1
        : 2
    })

    /**
     * Log message string.
     *
     * @var {string} message
     */
    let message: string = ''

    if (lines.length) {
      const [line, ...rest] = lines
      ok(typeof line === 'string', 'expected `line` to be a string')

      if (columns >= 80) {
        /**
         * Left side of first log message line.
         *
         * @const {string} left
         */
        const left: string = this.filterJoin([type, this.characters(line)])

        /**
         * Right side of first log message line.
         *
         * @const {string} right
         */
        const right: string = this.bracket(this.filterJoin([tag, date]))

        /**
         * Space between {@linkcode left} and {@linkcode right} side of first
         * log message line.
         *
         * @const {number} space
         */
        const space: number = columns - this.width(left) - this.width(right) - 2

        if (space) {
          message = left
          if (right) message += ' '.repeat(space) + this.colors.gray(right)
        }
      }

      if (!message) {
        message = this.filterJoin([
          tag ? this.colors.gray(this.bracket(tag)) : tag,
          type,
          this.characters(line)
        ])
      }

      // add remaining lines to log message
      if (rest.length) {
        message += this.logger.eol

        for (const line of rest) {
          message += this.characters(line) + this.logger.eol
        }
      }
    }

    if (!this.logger.browser && !message.endsWith(this.logger.eol)) {
      message += this.logger.eol
    }

    return message
  }

  /**
   * Initialize the reporter.
   *
   * @see {@linkcode Logger}
   *
   * @public
   * @override
   * @instance
   *
   * @param {Logger} logger
   *  The logger `this` reporter writes to
   * @return {this}
   *  `this` reporter
   */
  public override init(logger: Logger): this {
    /**
     * Checkmark icon.
     *
     * @const {string} check
     */
    const check: string = icon('✔', '√', logger.unicode)

    /**
     * Failure icon.
     *
     * @const {string} x
     */
    const x: string = icon('✖', '\u00D7', logger.unicode)

    this.icons = {
      [logTypes.debug]: icon('⚙', 'D', logger.unicode),
      [logTypes.error]: x,
      [logTypes.fail]: x,
      [logTypes.info]: icon('ℹ', 'i', logger.unicode),
      [logTypes.log]: '',
      [logTypes.ready]: check,
      [logTypes.start]: icon('◐', 'o', logger.unicode),
      [logTypes.success]: check,
      [logTypes.trace]: icon('→', '→', logger.unicode),
      [logTypes.warn]: icon('▲', '‼', logger.unicode)
    }

    this.levelColors = {
      [logLevels.error]: 'red',
      [logLevels.warn]: 'yellow'
    }

    this.typeColors = {
      [logTypes.error]: 'red',
      [logTypes.fail]: 'red',
      [logTypes.info]: 'cyan',
      [logTypes.ready]: 'green',
      [logTypes.start]: 'magenta',
      [logTypes.success]: 'green',
      [logTypes.warn]: 'yellow'
    }

    return super.init(logger)
  }

  /**
   * Get formatting options for `info`.
   *
   * @see {@linkcode InputLogObject}
   *
   * @protected
   * @override
   * @instance
   *
   * @param {InputLogObject} info
   *  The log information to process
   * @return {LogFormatOptions}
   *  Formatting options
   */
  protected override options(info: InputLogObject): LogFormatOptions {
    return merge({ date: true, icon: true }, super.options(info))
  }

  /**
   * Define how a log message is processed and displayed by `this` reporter.
   *
   * @see {@linkcode LogObject}
   *
   * @public
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @return {undefined}
   */
  public report(info: LogObject): undefined {
    return void this.stream(info).write(this.info(info))
  }

  /**
   * Format a stack trace.
   *
   * @protected
   * @override
   * @instance
   *
   * @param {string | null | undefined} stack
   *  The stack trace to format
   * @return {ReadonlyArray<string>}
   *  Formatted stack trace lines
   */
  protected override stack(
    stack: string | null | undefined
  ): readonly string[] {
    return Object.freeze(super.stack(stack).map(line => {
      if (line) {
        line = line
          .replace(/(?:(?<=\()|)[^ (]+:\d+:\d+(?=\)|$)/, this.colors.cyan)
          .replace(/^(at)(?= )/, this.colors.gray)
      }

      return line
    }))
  }
}

export default FancyReporter
