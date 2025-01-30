/**
 * @file Type Tests - LogFormatOptions
 * @module log/interfaces/tests/unit-d/LogFormatOptions
 */

import type TestSubject from '#interfaces/log-format-options'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:interfaces/LogFormatOptions', () => {
  it('should match [colors?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('colors')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [columns?: number | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('columns')
      .toEqualTypeOf<Nilable<number>>()
  })

  it('should match [date?: boolean | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('date')
      .toEqualTypeOf<Optional<boolean>>()
  })

  it('should match [icon?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('icon')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
