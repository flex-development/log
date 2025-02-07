/**
 * @file Reporters - Reporter
 * @module log/reporters/Reporter
 */

import normalizeLevel from '#internal/normalize-level'
import type {
  InputLogObject,
  LogLevel,
  LogObject,
  Logger,
  WriteStream
} from '@flex-development/log'

/**
 * Log reporter API.
 *
 * @category
 *  reporters
 *
 * @class
 * @abstract
 */
abstract class Reporter {
  /**
   * The logger `this` reporter writes to.
   *
   * @see {@linkcode Logger}
   *
   * @public
   * @instance
   * @member {Logger}
   */
  public logger!: Logger

  /**
   * Initialize the reporter.
   *
   * @see {@linkcode Logger}
   *
   * @public
   * @instance
   *
   * @param {Logger} logger
   *  The logger `this` reporter writes to
   * @return {this}
   *  `this` reporter
   */
  public init(logger: Logger): this {
    return this.logger = logger, this
  }

  /**
   * Define how a log message is processed and displayed by `this` reporter.
   *
   * @see {@linkcode LogObject}
   *
   * @public
   * @abstract
   * @instance
   *
   * @param {LogObject} info
   *  The log information to process
   * @return {undefined | void}
   */
  public abstract report(info: LogObject): undefined | void

  /**
   * Get a write stream for `info`.
   *
   * @see {@linkcode InputLogObject}
   * @see {@linkcode WriteStream}
   *
   * @protected
   * @instance
   *
   * @param {InputLogObject} info
   *  The log information to process
   * @return {WriteStream}
   *  Writable stream for `info` based on log level
   */
  protected stream(info: InputLogObject): WriteStream {
    /**
     * Normalized log level.
     *
     * @const {LogLevel} level
     */
    const level: LogLevel = normalizeLevel(this.logger, info.level)

    return level < this.logger.levels.log
      ? this.logger.stderr
      : this.logger.stdout
  }
}

export default Reporter
