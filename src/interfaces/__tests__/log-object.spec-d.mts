/**
 * @file Type Tests - LogObject
 * @module log/interfaces/tests/unit-d/LogObject
 */

import type TestSubject from '#interfaces/log-object'
import type {
  InputLogObject,
  LogLevel,
  LogType
} from '@flex-development/log'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/LogObject', () => {
  it('should extend InputLogObject', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<InputLogObject>()
  })

  it('should match [additional?: string[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('additional')
      .toEqualTypeOf<Nilable<string[]>>()
  })

  it('should match [args: unknown[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('args')
      .toEqualTypeOf<unknown[]>()
  })

  it('should match [date: Date]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('date').toEqualTypeOf<Date>()
  })

  it('should match [level: LogLevel]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('level')
      .toEqualTypeOf<LogLevel>()
  })

  it('should match [message?: null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('message')
      .toEqualTypeOf<Nilable<never>>()
  })

  it('should match [type: LogType]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('type').toEqualTypeOf<LogType>()
  })
})
