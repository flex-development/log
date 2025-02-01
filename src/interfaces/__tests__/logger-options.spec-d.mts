/**
 * @file Type Tests - LoggerOptions
 * @module log/interfaces/tests/unit-d/LoggerOptions
 */

import type TestSubject from '#interfaces/logger-options'
import type {
  InputLogObject,
  LogFormatOptions,
  LogLevelOption,
  LogType,
  ReportersOption,
  WriteStream
} from '@flex-development/log'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/LoggerOptions', () => {
  it('should match [eol?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('eol')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [format?: LogFormatOptions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('format')
      .toEqualTypeOf<Nilable<LogFormatOptions>>()
  })

  it('should match [level?: LogLevelOption | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('level')
      .toEqualTypeOf<Nilable<LogLevelOption>>()
  })

  it('should match [reporters?: ReportersOption | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('reporters')
      .toEqualTypeOf<Nilable<ReportersOption>>()
  })

  it('should match [stderr?: WriteStream | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stderr')
      .toEqualTypeOf<Nilable<WriteStream>>()
  })

  it('should match [stdout?: WriteStream | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stdout')
      .toEqualTypeOf<Nilable<WriteStream>>()
  })

  it('should match [types?: Partial<Record<LogType, InputLogObject>> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('types')
      .toEqualTypeOf<Nilable<Partial<Record<LogType, InputLogObject>>>>()
  })
})
