/**
 * @file Reporters - Reporter
 * @module log/reporters/Reporter
 */

import type { LogObject, Logger } from '@flex-development/log'

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
   * The logger this reporter writes to.
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
}

export default Reporter
