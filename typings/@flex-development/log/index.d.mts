import type { LoggerOptions } from '@flex-development/log'

declare module '@flex-development/log' {
  interface Logger {
    /**
     * Logger configuration options.
     *
     * @see {@linkcode LoggerOptions}
     *
     * @internal
     */
    options: LoggerOptions
  }
}
