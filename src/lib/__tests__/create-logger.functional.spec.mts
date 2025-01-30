/**
 * @file Functional Tests - createLogger
 * @module log/lib/tests/functional/createLogger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#lib/create-logger'
import Reporter from '#reporters/abstract.reporter'
import type { Logger, LogType } from '@flex-development/log'
import pkg from '@flex-development/log/package.json' with { type: 'json' }
import { omit, type Constructor } from '@flex-development/tutils'
import type { MockInstance } from 'vitest'

describe('functional:lib/createLogger', () => {
  describe('<type>', () => {
    let MockReporter: Constructor<Reporter>
    let reporter: Reporter
    let subject: Logger

    beforeAll(() => {
      MockReporter = class MockReporter extends Reporter {
        /**
         * Define how a log message is processed and displayed.
         *
         * @public
         * @instance
         *
         * @return {undefined}
         */
        public write(): undefined {
          return void expect(this).to.have.property('logger', subject)
        }
      }
    })

    beforeEach(() => {
      reporter = new MockReporter()
      subject = testSubject({ reporters: [reporter] })
      subject.unicode = true
    })

    it.each<LogType>([
      logTypes.debug,
      logTypes.error,
      logTypes.fail,
      logTypes.info,
      logTypes.inspect,
      logTypes.log,
      logTypes.ready,
      logTypes.start,
      logTypes.success,
      logTypes.trace,
      logTypes.verbose,
      logTypes.warn
    ])('should not send info above maximum log level (%#)', type => {
      // Arrange
      vi.spyOn(reporter, 'write')

      // Act
      subject.level = subject.levels.silent
      subject[type](type)

      // Expect
      expect(reporter.write).not.toHaveBeenCalled()
    })

    it.each<[type: LogType, message: unknown, ...args: unknown[]]>([
      [logTypes.log, 'hello', 'world'],
      [logTypes.start, { args: [pkg.name], message: 'Building %s' }],
      [logTypes.warn, {
        additional: '\n  tsconfig.build.json',
        args: ['[mkbuild:dts]'],
        level: logLevels.verbose,
        message:
          '%s Compiler option \'sourceMap\' requires a value of type boolean'
      }]
    ])('should send info to reporters (%#)', (type, message, ...args) => {
      // Arrange
      const write: MockInstance<Reporter['write']> = vi.spyOn(reporter, 'write')

      // Act
      subject.level = subject.levels.verbose
      subject[type](message, ...args)

      // Expect
      expect(write).toHaveBeenCalledOnce()
      expect(write.mock.lastCall?.[0]).to.have.property('date').instanceof(Date)
      expect(omit(write.mock.lastCall![0], ['date'])).toMatchSnapshot()
    })
  })
})
