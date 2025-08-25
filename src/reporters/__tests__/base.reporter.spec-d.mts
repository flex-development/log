/**
 * @file Type Tests - BaseReporter
 * @module log/reporters/tests/unit-d/BaseReporter
 */

import Reporter from '#reporters/abstract.reporter'
import TestSubject from '#reporters/base.reporter'
import type { Color, ColorFunction } from '@flex-development/colors'
import type {
  InputLogObject,
  LogFormatOptions,
  LogObject
} from '@flex-development/log'
import type { Nilable } from '@flex-development/tutils'
import type { Options as StringWidthOptions } from 'string-width'

describe('unit-d:reporters/BaseReporter', () => {
  it('should extend Reporter', () => {
    expectTypeOf<TestSubject>().toExtend<Reporter>()
  })

  describe('args', () => {
    type Subject = TestSubject['args']

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

  describe('bg', () => {
    type Subject = TestSubject['bg']

    describe('parameters', () => {
      it('should be callable with [(string | null | undefined)?, (Color | null | undefined)?]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[Nilable<string>?, Nilable<Color>?]>()
      })
    })

    describe('returns', () => {
      it('should return ColorFunction', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<ColorFunction>()
      })
    })
  })

  describe('bracket', () => {
    type Subject = TestSubject['bracket']

    describe('parameters', () => {
      it('should be callable with [string | null | undefined]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[Nilable<string>]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('color', () => {
    type Subject = TestSubject['color']

    describe('parameters', () => {
      it('should be callable with [(string | null | undefined)?, (Color | null | undefined)?]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[Nilable<string>?, Nilable<Color>?]>()
      })
    })

    describe('returns', () => {
      it('should return ColorFunction', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<ColorFunction>()
      })
    })
  })

  describe('date', () => {
    type Subject = TestSubject['date']

    describe('parameters', () => {
      it('should be callable with [InputLogObject, LogFormatOptions]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[InputLogObject, LogFormatOptions]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('filterJoin', () => {
    type Subject = TestSubject['filterJoin']

    describe('parameters', () => {
      it('should be callable with [Set<unknown> | readonly unknown[], (string | null | undefined)?]', () => {
        // Arrange
        type Expect = [Set<unknown> | readonly unknown[], Nilable<string>?]

        // Expect
        expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('lines', () => {
    type Subject = TestSubject['lines']

    describe('parameters', () => {
      it('should be callable with [LogObject, LogFormatOptions & { indent: number }]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[LogObject, LogFormatOptions & { indent: number }]>()
      })
    })

    describe('returns', () => {
      it('should return string[]', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string[]>()
      })
    })
  })

  describe('options', () => {
    type Subject = TestSubject['options']

    describe('parameters', () => {
      it('should be callable with [InputLogObject]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[InputLogObject]>()
      })
    })

    describe('returns', () => {
      it('should return LogFormatOptions', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<LogFormatOptions>()
      })
    })
  })

  describe('stack', () => {
    type Subject = TestSubject['stack']

    describe('parameters', () => {
      it('should be callable with [string | null | undefined]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[Nilable<string>]>()
      })
    })

    describe('returns', () => {
      it('should return readonly string[]', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<readonly string[]>()
      })
    })
  })

  describe('tag', () => {
    type Subject = TestSubject['tag']

    describe('parameters', () => {
      it('should be callable with [InputLogObject]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[InputLogObject]>()
      })
    })

    describe('returns', () => {
      it('should return string', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
      })
    })
  })

  describe('width', () => {
    type Subject = TestSubject['width']

    describe('parameters', () => {
      it('should be callable with [string, (StringWidthOptions | null | undefined)?]', () => {
        expectTypeOf<Subject>()
          .parameters
          .toEqualTypeOf<[string, Nilable<StringWidthOptions>?]>()
      })
    })

    describe('returns', () => {
      it('should return number', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<number>()
      })
    })
  })
})
