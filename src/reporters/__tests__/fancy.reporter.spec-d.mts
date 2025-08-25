/**
 * @file Type Tests - FancyReporter
 * @module log/reporters/tests/unit-d/FancyReporter
 */

import type BaseReporter from '#reporters/base.reporter'
import type TestSubject from '#reporters/fancy.reporter'
import type { Color } from '@flex-development/colors'
import type {
  LogFormatOptions,
  LogLevel,
  LogObject,
  LogType
} from '@flex-development/log'

describe('unit-d:reporters/FancyReporter', () => {
  it('should extend BaseReporter', () => {
    expectTypeOf<TestSubject>().toExtend<BaseReporter>()
  })

  it('should match [icons: Partial<Record<LogType, string>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('icons')
      .toEqualTypeOf<Partial<Record<LogType, string>>>()
  })

  it('should match [levelColors: Partial<Record<LogLevel, Color>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('levelColors')
      .toEqualTypeOf<Partial<Record<LogLevel, Color>>>()
  })

  it('should match [typeColors: Partial<Record<LogType, Color>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('typeColors')
      .toEqualTypeOf<Partial<Record<LogType, Color>>>()
  })

  describe('badge', () => {
    type Subject = TestSubject['badge']

    describe('parameters', () => {
      it('should be callable with [LogObject, LogFormatOptions]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[LogObject, LogFormatOptions]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('characters', () => {
    type Subject = TestSubject['characters']

    describe('parameters', () => {
      it('should be callable with [string]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[string]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('icon', () => {
    type Subject = TestSubject['icon']

    describe('parameters', () => {
      it('should be callable with [LogObject, LogFormatOptions]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[LogObject, LogFormatOptions]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('info', () => {
    type Subject = TestSubject['info']

    describe('parameters', () => {
      it('should be callable with [LogObject]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[LogObject]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })
})
