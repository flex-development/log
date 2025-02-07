/**
 * @file Interfaces - WriteStream
 * @module log/interfaces/WriteStream
 */

/**
 * Write stream API.
 */
interface WriteStream {
  /**
   * Number of columns the TTY currently has.
   */
  columns?: number | null | undefined

  /**
   * Write data to the stream.
   *
   * @this {void}
   *
   * @param {string} buffer
   *  The data to write
   * @return {boolean | undefined | void}
   *  `true` if all data was flushed successfully, `false` if all or part of
   *  the data was queued in user memory, or nothing
   */
  write(this: void, buffer: string): boolean | undefined | void
}

export type { WriteStream as default }
