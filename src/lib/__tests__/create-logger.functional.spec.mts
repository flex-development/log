/**
 * @file Functional Tests - createLogger
 * @module log/lib/tests/functional/createLogger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import error from '#fixtures/error'
import testSubject from '#lib/create-logger'
import Reporter from '#reporters/abstract.reporter'
import type { Logger, LogType, WriteStream } from '@flex-development/log'
import pkg from '@flex-development/log/package.json' with { type: 'json' }
import { omit, type Constructor } from '@flex-development/tutils'
import * as util from 'node-inspect-extracted'
import type { Mock, MockInstance } from 'vitest'

describe('functional:lib/createLogger', () => {
  describe('<type>', () => {
    let MockReporter: Constructor<Reporter>
    let reporter: Reporter
    let subject: Logger

    beforeAll(() => {
      /**
       * @class
       * @extends {Reporter}
       */
      MockReporter = class MockReporter extends Reporter {
        /**
         * Define how a log message is processed and displayed.
         *
         * @public
         * @instance
         *
         * @return {undefined}
         */
        public report(): undefined {
          return void expect(this).to.have.property('logger', subject)
        }
      }
    })

    beforeEach(() => {
      reporter = new MockReporter()
      subject = testSubject({ reporters: reporter })
      subject.unicode = true
    })

    it.each<LogType>([
      logTypes.debug,
      logTypes.error,
      logTypes.fail,
      logTypes.info,
      logTypes.log,
      logTypes.ready,
      logTypes.start,
      logTypes.success,
      logTypes.trace,
      logTypes.verbose,
      logTypes.warn
    ])('should not send info above maximum log level (%#)', type => {
      // Arrange
      vi.spyOn(reporter, 'report')

      // Act
      subject.level = subject.levels.silent
      subject[type](type)

      // Expect
      expect(reporter.report).not.toHaveBeenCalled()
    })

    it.each<[type: LogType, message: unknown, ...args: unknown[]]>([
      [logTypes.fail, { message: Object.assign(error, { stack: '' }) }],
      [logTypes.info, { args: null, message: 'Building...' }],
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
      const spy: MockInstance<Reporter['report']> = vi.spyOn(reporter, 'report')

      // Act
      subject.level = subject.levels.verbose
      subject[type](message, ...args)

      // Expect
      expect(spy).toHaveBeenCalledOnce()
      expect(spy.mock.lastCall?.[0]).to.have.property('date').instanceof(Date)
      expect(omit(spy.mock.lastCall![0], ['date'])).toMatchSnapshot()
    })
  })

  describe('#inspect', () => {
    let eol: string
    let subject: Logger
    let write: Mock<WriteStream['write']>

    vi.mock('node-inspect-extracted', { spy: true })

    beforeAll(() => {
      write = vi.fn().mockName('write')

      subject = testSubject({ level: logLevels.silent, stdout: { write } })
      subject.unicode = true

      eol = subject.eol
    })

    it('should print string representation of `value`', () => {
      // Arrange
      const value: unknown = { id: import.meta.url }

      // Act
      subject.inspect(value)
      const { calls, lastCall, results } = vi.mocked(util.inspect).mock

      // Expect
      expect(calls.length).to.eq(1)
      expect(lastCall?.[0]).to.eq(value)
      expect(write).toHaveBeenCalledOnce()
      expect(write).toHaveBeenCalledWith(results[0]?.value as string + eol)
    })
  })
})
