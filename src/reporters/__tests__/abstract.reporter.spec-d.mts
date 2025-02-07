/**
 * @file Type Tests - Reporter
 * @module log/reporters/tests/unit-d/Reporter
 */

import type TestSubject from '#reporters/abstract.reporter'
import type {
  InputLogObject,
  LogObject,
  Logger,
  WriteStream
} from '@flex-development/log'

describe('unit-d:reporters/Reporter', () => {
  describe('init', () => {
    type Subject = TestSubject['init']

    describe('parameters', () => {
      it('should be callable with [Logger]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[Logger]>()
      })
    })

    describe('returns', () => {
      it('should return this', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<TestSubject>()
      })
    })
  })

  describe('report', () => {
    type Subject = TestSubject['report']

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

  describe('stream', () => {
    type Subject = TestSubject['stream']

    describe('parameters', () => {
      it('should be callable with [InputLogObject]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[InputLogObject]>()
      })
    })

    describe('returns', () => {
      it('should return WriteStream', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<WriteStream>()
      })
    })
  })
})
