/**
 * @file Type Tests - Reporter
 * @module log/reporters/tests/unit-d/Reporter
 */

import type TestSubject from '#reporters/abstract.reporter'
import type { LogObject, Logger } from '@flex-development/log'

describe('unit-d:reporters/Reporter', () => {
  it('should match [logger: Logger]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('logger').toEqualTypeOf<Logger>()
  })

  describe('write', () => {
    type Subject = TestSubject['write']

    describe('parameters', () => {
      it('should be callable with [LogObject]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[LogObject]>()
      })
    })

    describe('returns', () => {
      it('should return undefined | void', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<undefined | void>()
      })
    })
  })
})
