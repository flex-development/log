/**
 * @file Reporters - BaseReporter
 * @module log/reporters/BaseReporter
 */

import merge from '#internal/merge'
import Reporter from '#reporters/abstract.reporter'
import type { Color, ColorFunction, Colors } from '@flex-development/colors'
import type {
  InputLogObject,
  LogFormatOptions,
  Logger,
  LogObject
} from '@flex-development/log'
import pathe from '@flex-development/pathe'
import {
  formatWithOptions as format,
  type InspectOptions
} from 'node-inspect-extracted'
import stringWidth, { type Options as StringWidthOptions } from 'string-width'

/**
 * Log reporter API with basic utilities.
 *
 * @category
 *  reporters
 *
 * @class
 * @abstract
 * @extends {Reporter}
 */
abstract class BaseReporter extends Reporter {
  /**
   * Colorizer.
   *
   * @see {@linkcode Colors}
   *
   * @protected
   * @instance
   * @member {Colors} colors
   */
  protected colors!: Colors

  /**
   * Format log arguments.
   *
   * @see {@linkcode LogFormatOptions}
   * @see {@linkcode LogObject}
   * @see {@linkcode format}
   *
   * @protected
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @param {LogFormatOptions} options
   *  Log format options
   * @return {string}
   *  Formatted log arguments
   */
  protected args(info: LogObject, options: LogFormatOptions): string {
    return format(options as InspectOptions, ...info.args.map(arg => {
      if (arg instanceof Error) {
        /**
         * Formatted error.
         *
         * @var {string} error
         */
        let error: string = arg.message

        if (arg.stack) {
          if (!error.endsWith(this.logger.eol)) error += this.logger.eol

          /**
           * Stack trace lines.
           *
           * @const {ReadonlyArray<string>} stack
           */
          const stack: readonly string[] = this.stack(arg.stack)

          for (const [i, line] of stack.entries()) {
            error += line
            if (i !== stack.length - 1) error += this.logger.eol
          }
        }

        arg = error
      }

      return arg
    }))
  }

  /**
   * Get a background color function by `color`.
   *
   * @see {@linkcode Color}
   *
   * @protected
   * @instance
   *
   * @param {string | null | undefined} [color]
   *  Color name
   * @param {Color | null | undefined} [fallback='bgWhite']
   *  Fallback background color
   * @return {ColorFunction}
   *  Background color function
   */
  protected bg(
    color?: string | null | undefined,
    fallback?: Color | null | undefined
  ): ColorFunction {
    if (color === 'gray') {
      color = 'bgBlackBright'
    } else if (typeof color === 'string' && !/^bg[A-Z]/.test(color)) {
      const [letter, ...letters] = color
      color = `bg${letter!.toUpperCase()}${letters.join('')}` as Color
    }

    if (
      typeof color === 'string' &&
      color in this.colors &&
      typeof this.colors[color as never] === 'function'
    ) {
      return this.colors[color as Color]
    }

    return !fallback && (fallback = 'bgWhite'), this.colors[fallback]
  }

  /**
   * Wrap a `string` in brackets.
   *
   * @protected
   * @instance
   *
   * @param {string | null | undefined} string
   *  The string to wrap
   * @return {string}
   *  `string` wrapped in brackets or empty string
   */
  protected bracket(string: string | null | undefined): string {
    /**
     * Formatted string.
     *
     * @var {string} bracketed
     */
    let bracketed: string = ''

    if (string) {
      bracketed = `[${string}]`
    }

    return bracketed
  }

  /**
   * Get a `color` function.
   *
   * @see {@linkcode Color}
   *
   * @protected
   * @instance
   *
   * @param {string | null | undefined} [color]
   *  Color name
   * @param {Color | null | undefined} [fallback='gray']
   *  Fallback color
   * @return {ColorFunction}
   *  Color function
   */
  protected color(
    color?: string | null | undefined,
    fallback?: Color | null | undefined
  ): ColorFunction {
    if (
      typeof color === 'string' &&
      color in this.colors &&
      typeof this.colors[color as never] === 'function'
    ) {
      return this.colors[color as Color]
    }

    return !fallback && (fallback = 'gray'), this.colors[fallback]
  }

  /**
   * Format a date.
   *
   * @see {@linkcode InputLogObject}
   * @see {@linkcode LogFormatOptions}
   *
   * @protected
   * @instance
   *
   * @param {InputLogObject} info
   *  The log information to process
   * @param {LogFormatOptions} options
   *  Log format options
   * @return {string}
   *  Formatted date or empty string
   */
  protected date(info: InputLogObject, options: LogFormatOptions): string {
    /**
     * Formatted date.
     *
     * @var {string} date
     */
    let date: string = ''

    if (info.date && options.date) {
      date = info.date.toLocaleTimeString()
    }

    return date
  }

  /**
   * Filter and join a `list`.
   *
   * @protected
   * @instance
   *
   * @param {ReadonlyArray<unknown> | Set<unknown>} list
   *  The list to filter
   * @param {string | null | undefined} [separator]
   *  String used to separate one element of `list` from the next in the
   *  resulting string. If omitted, list items are separated with a space (` `).
   * @return {string}
   *  Sifted and joined `list`
   */
  protected filterJoin(
    list: Set<unknown> | readonly unknown[],
    separator?: string | null | undefined
  ): string {
    return [...list].filter(Boolean).join(separator ?? ' ')
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
    return this.colors = logger.colors, super.init(logger)
  }

  /**
   * Get the lines of a log message.
   *
   * @see {@linkcode LogFormatOptions}
   * @see {@linkcode LogObject}
   *
   * @protected
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @param {LogFormatOptions & { indent: number }} options
   *  Log format options
   * @param {number} options.indent
   *  Indent size (applied to non-empty lines after the first only)
   * @return {string[]}
   *  Log message lines
   */
  protected lines(
    info: LogObject,
    options: LogFormatOptions & { indent: number }
  ): string[] {
    return [
      ...this.args(info, options).split(this.logger.eol),
      ...(Array.isArray(info.additional) ? info.additional : []),
      ...this.stack(info.stack)
    ].map((line: string, i: number): string => {
      if (i && line) line = ' '.repeat(options.indent) + line
      return line
    })
  }

  /**
   * Get formatting options for `info`.
   *
   * @see {@linkcode InputLogObject}
   *
   * @protected
   * @instance
   *
   * @param {InputLogObject} info
   *  The log information to process
   * @return {LogFormatOptions}
   *  Formatting options
   */
  protected options(info: InputLogObject): LogFormatOptions {
    const { columns } = this.stream(info)
    const { format } = this.logger

    /**
     * Formatting options.
     *
     * @const {LogFormatOptions} options
     */
    const options: LogFormatOptions = merge({ columns }, format, info.format)

    return this.colors.color = options.colors, options
  }

  /**
   * Format a stack trace.
   *
   * @protected
   * @instance
   *
   * @param {string | null | undefined} stack
   *  The stack trace to format
   * @return {ReadonlyArray<string>}
   *  Formatted stack trace lines
   */
  protected stack(stack: string | null | undefined): readonly string[] {
    /**
     * Formatted stack trace lines.
     *
     * @const {string[]} lines
     */
    const lines: string[] = []

    if (stack) {
      /**
       * URL of current working directory.
       *
       * @const {URL} cwd
       */
      const cwd: URL = pathe.pathToFileURL(pathe.cwd() + pathe.sep)

      lines.push(
        '',
        ...stack
          .split(this.logger.eol)
          .map(line => pathe.toPosix(line.trim()))
          .filter(line => /^at\s+/.test(line))
          .map(line => line.replace(cwd.href, '').replace(cwd.pathname, ''))
      )

      if (lines[lines.length - 1] !== lines[0]) lines.push(lines[0]!)
    }

    return Object.freeze(lines)
  }

  /**
   * Format a tag.
   *
   * @see {@linkcode InputLogObject}
   *
   * @protected
   * @instance
   *
   * @param {InputLogObject} info
   *  The log information to process
   * @return {string}
   *  Formatted tag or empty string
   */
  protected tag(info: InputLogObject): string {
    return info.tag ? info.tag : ''
  }

  /**
   * Get the visual width of `string`.
   *
   * @see {@linkcode StringWidthOptions}
   *
   * @protected
   * @instance
   *
   * @param {string} string
   *  The string to measure
   * @param {StringWidthOptions | null | undefined} [options]
   *  Measurement options
   * @return {number}
   *  Number of columns required to display `string`
   */
  protected width(
    string: string,
    options?: StringWidthOptions | null | undefined
  ): number {
    return stringWidth(string, { ...options })
  }
}

export default BaseReporter
