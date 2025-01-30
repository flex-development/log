declare module '@flex-development/log' {
  interface Logger {
    /**
     * Format a log level.
     *
     * @internal
     *
     * @this {Pick<Logger, 'types'>}
     *
     * @param {number | string | null | undefined} level
     *  Log level or type
     * @return {LogLevel}
     *  Normalized log level
     */
    normalizeLevel(
      this: Pick<Logger, 'types'>,
      level: number | string | null | undefined
    ): LogLevel
  }
}

export {}
