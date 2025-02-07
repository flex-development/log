/**
 * @file Functional Tests - FancyReporter
 * @module log/lib/tests/functional/FancyReporter
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import date from '#fixtures/date'
import error from '#fixtures/error'
import createLogger from '#lib/create-logger'
import TestSubject from '#reporters/fancy.reporter'
import type {
  Logger,
  LogObject,
  LogType,
  WriteStream
} from '@flex-development/log'
import type { Mock } from 'vitest'

describe('functional:reporters/FancyReporter', () => {
  let stderr: Mock<WriteStream['write']>
  let stdout: Mock<WriteStream['write']>
  let logger: Logger
  let subject: TestSubject

  beforeAll(() => {
    logger = createLogger({
      format: { colors: true },
      level: logLevels.verbose,
      stderr: { write: stderr = vi.fn().mockName('process.stderr.write') },
      stdout: { write: stdout = vi.fn().mockName('process.stdout.write') }
    })

    subject = new TestSubject().init(logger)
    vi.setSystemTime(date)
  })

  it.each<[Omit<LogObject, 'date'>]>([
    [
      {
        args: [error.message],
        format: { badge: true, columns: 80 },
        level: logLevels.error,
        stack: error.stack,
        type: logTypes.error
      }
    ],
    [
      {
        args: [error.message],
        level: logLevels.fatal,
        stack: error.stack,
        type: logTypes.fatal
      }
    ],
    [
      {
        args: [error.message],
        format: { badge: null },
        level: logLevels.fatal,
        stack: error.stack,
        type: logTypes.fail
      }
    ],
    [
      {
        additional: [
          '    \u001B[90m96 |\u001B[39m    \u001B[2m\u001B[33m: (await import(url.href) as { default?: Config | null }).default\u001B[39m\u001B[22m'
        ],
        args: [
          '\u001B[1m%s\u001B[22m This "import" expression will not be bundled because the argument is not a string literal\n  %s%s',
          '\u001B[33m[mkbuild:esbuild]\u001B[39m',
          '\u001B[90msrc/utils/load-build-config.mts\u001B[39m',
          '\u001B[90m:96:18:\u001B[39m'
        ],
        level: logLevels.warn,
        type: logTypes.warn
      }
    ]
  ])('should write to `logger.stderr` (%#)', info => {
    // Act
    subject.report(Object.assign({}, info, { date }))

    // Expect
    expect(stdout).not.toHaveBeenCalled()
    expect(stderr).toHaveBeenCalledExactlyOnceWith(expect.any(String))
    expect(stderr.mock.lastCall?.[0]).toMatchSnapshot()
  })

  it.each<[Omit<LogObject, 'date'>]>([
    [
      {
        args: [
          '%s `paths` option is specified, looking for a pattern to match module name \'#interfaces/index\'.',
          '[mkbuild:dts]'
        ],
        level: logLevels.debug,
        type: logTypes.debug
      }
    ],
    [
      {
        args: [error],
        icon: '❌',
        level: logLevels.fail,
        type: logTypes.fail
      }
    ],
    [
      {
        args: ['Using @flex-development/mkbuild@1.0.0-alpha.24'],
        level: logLevels.info,
        type: logTypes.info
      }
    ],
    [
      {
        args: ['🥸'],
        level: logLevels.info,
        type: logTypes.inspect as LogType
      }
    ],
    [
      {
        args: ['🤓'],
        format: { badge: true },
        level: logLevels.info,
        type: logTypes.inspect as LogType
      }
    ],
    [
      {
        args: ['hello world! 🌎'],
        level: logLevels.log,
        type: logTypes.log
      }
    ],
    [
      {
        args: ['premajor'],
        level: logLevels.info,
        tag: 'grease:bump',
        type: logTypes.log
      }
    ],
    [
      {
        args: [
          '\u001B[1m%s\u001B[22m This "import" expression will not be bundled because the argument is not a string literal\n  %s%s\n    \u001B[90m%j |\u001B[39m    \u001B[2m\u001B[33m%s\u001B[39m\u001B[22m',
          '\u001B[33m[mkbuild:esbuild]\u001B[39m',
          '\u001B[90msrc/utils/load-build-config.mts\u001B[39m',
          '\u001B[90m:96:18:\u001B[39m',
          96,
          ': (await import(url.href) as { default?: Config | null }).default'
        ],
        color: 'yellow',
        level: logLevels.log,
        type: logTypes.warn
      }
    ],
    [
      {
        args: ['Ready to build project 👍🏾'],
        level: logLevels.ready,
        type: logTypes.ready
      }
    ],
    [
      {
        args: ['Building project...'],
        level: logLevels.start,
        type: logTypes.start
      }
    ],
    [
      {
        args: ['Deployed project to `production` environment 🚀'],
        level: logLevels.success,
        type: logTypes.success
      }
    ],
    [
      {
        args: ['%s Exiting conditional exports.', '[mkbuild:dts]'],
        level: logLevels.trace,
        type: logTypes.trace
      }
    ],
    [
      {
        args: ['%s Matched `imports` condition \'log\'.', '[mkbuild:dts]'],
        level: logLevels.verbose,
        type: logTypes.verbose
      }
    ],
    [
      {
        args: [
          '%s Using `imports` subpath \'#types/*\' with target \'./src/types/index.mts\'.',
          '[mkbuild:dts]'
        ],
        color: 'gray',
        format: { badge: true },
        level: logLevels.verbose,
        type: logTypes.verbose
      }
    ]
  ])('should write to `logger.stdout` (%#)', info => {
    // Act
    subject.report(Object.assign({}, info, { date }))

    // Expect
    expect(stderr).not.toHaveBeenCalled()
    expect(stdout).toHaveBeenCalledExactlyOnceWith(expect.any(String))
    expect(stdout.mock.lastCall?.[0]).toMatchSnapshot()
  })
})
