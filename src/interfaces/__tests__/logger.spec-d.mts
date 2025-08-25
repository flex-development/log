/**
 * @file Type Tests - Logger
 * @module log/interfaces/tests/unit-d/Logger
 */

import type TestSubject from '#interfaces/logger'
import type { Colors } from '@flex-development/colors'
import type {
  InputLogObject,
  LogFormatOptions,
  LogFunctions,
  LoggerOptions,
  LogLevel,
  LogLevelMap,
  LogType,
  WriteStream
} from '@flex-development/log'
import type { Reporter } from '@flex-development/log/reporters'
import type { ReadonlyKeys } from '@flex-development/tutils'

describe('unit-d:interfaces/Logger', () => {
  it('should extend LogFunctions', () => {
    expectTypeOf<TestSubject>().toExtend<LogFunctions>()
  })

  it('should match [readonly browser: boolean]', () => {
    // Arrange
    type K = ReadonlyKeys<TestSubject>
    type T = boolean

    // Expect
    expectTypeOf<K>().extract<'browser'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('browser').toEqualTypeOf<T>()
  })

  it('should match [color: boolean]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('color').toEqualTypeOf<boolean>()
  })

  it('should match [colors: Colors]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('colors').toEqualTypeOf<Colors>()
  })

  it('should match [eol: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('eol').toEqualTypeOf<string>()
  })

  it('should match [format: LogFormatOptions]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('format')
      .toEqualTypeOf<LogFormatOptions>()
  })

  it('should match [level: LogLevel]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('level')
      .toEqualTypeOf<LogLevel>()
  })

  it('should match [readonly levels: Readonly<LogLevelMap>]', () => {
    // Arrange
    type K = ReadonlyKeys<TestSubject>
    type T = Readonly<LogLevelMap>

    // Expect
    expectTypeOf<K>().extract<'levels'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('levels').toEqualTypeOf<T>()
  })

  it('should match [readonly reporters: Set<Reporter>]', () => {
    // Arrange
    type K = ReadonlyKeys<TestSubject>
    type T = Set<Reporter>

    // Expect
    expectTypeOf<K>().extract<'reporters'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('reporters').toEqualTypeOf<T>()
  })

  it('should match [stderr: WriteStream]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stderr')
      .toEqualTypeOf<WriteStream>()
  })

  it('should match [stdout: WriteStream]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stdout')
      .toEqualTypeOf<WriteStream>()
  })

  it('should match [types: Record<LogType, InputLogObject>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<Record<LogType, InputLogObject>>()
  })

  it('should match [unicode: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('unicode')
      .toEqualTypeOf<boolean>()
  })

  describe('create', () => {
    type Subject = TestSubject['create']

    describe('parameters', () => {
      it('should be callable with [(LoggerOptions | null | undefined)?]', () => {
        // Arrange
        type Expect = [(LoggerOptions | null | undefined)?]

        // Expect
        expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
      })
    })

    describe('returns', () => {
      it('should return Logger', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<TestSubject>()
      })
    })
  })

  describe('withDefaults', () => {
    type Subject = TestSubject['withDefaults']

    describe('parameters', () => {
      it('should be callable with [(InputLogObject | null | undefined)?]', () => {
        // Arrange
        type Expect = [(InputLogObject | null | undefined)?]

        // Expect
        expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
      })
    })

    describe('returns', () => {
      it('should return Logger', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<TestSubject>()
      })
    })
  })

  describe('withTag', () => {
    type Subject = TestSubject['withTag']

    describe('parameters', () => {
      it('should be callable with [string, [string | null | undefined]?]', () => {
        // Arrange
        type Expect = [string, (string | null | undefined)?]

        // Expect
        expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
      })
    })

    describe('returns', () => {
      it('should return Logger', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<TestSubject>()
      })
    })
  })
})
