/**
 * @file Interfaces - WriteStream
 * @module log/interfaces/WriteStream
 */

import type { Write } from '@flex-development/log'

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
   * @see {@linkcode Write}
   */
  write: Write
}

export type { WriteStream as default }
