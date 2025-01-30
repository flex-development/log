/**
 * @file Type Tests - InputLogObject
 * @module log/interfaces/tests/unit-d/InputLogObject
 */

import type TestSubject from '#interfaces/input-log-object'
import type { Color } from '@flex-development/colors'
import type {
  LogFormatOptions,
  LogLevel,
  LogType
} from '@flex-development/log'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/InputLogObject', () => {
  it('should match [additional?: string[] | string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('additional')
      .toEqualTypeOf<Nilable<string[] | string>>()
  })

  it('should match [args?: unknown[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('args')
      .toEqualTypeOf<Nilable<unknown[]>>()
  })

  it('should match [color?: Color | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('color')
      .toEqualTypeOf<Nilable<Color>>()
  })

  it('should match [date?: Date | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('date')
      .toEqualTypeOf<Nilable<Date>>()
  })

  it('should match [format?: LogFormatOptions | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('format')
      .toEqualTypeOf<Nilable<LogFormatOptions>>()
  })

  it('should match [icon?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('icon')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [level?: LogLevel | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('level')
      .toEqualTypeOf<Nilable<LogLevel>>()
  })

  it('should match [message?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('message')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [stack?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stack')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [type?: LogType | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Nilable<LogType>>()
  })
})
