/**
 * @file Type Tests - LogFormatOptions
 * @module log/interfaces/tests/unit-d/LogFormatOptions
 */

import type TestSubject from '#interfaces/log-format-options'
import type { InspectOptions } from '@flex-development/log'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/LogFormatOptions', () => {
  it('should extend InspectOptions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<InspectOptions>()
  })

  it('should match [badge?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('badge')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [columns?: number | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('columns')
      .toEqualTypeOf<Nilable<number>>()
  })

  it('should match [date?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('date')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [icon?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('icon')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
