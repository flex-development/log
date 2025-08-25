/**
 * @file Type Tests - InspectOptions
 * @module log/interfaces/tests/unit-d/InspectOptions
 */

import type TestSubject from '#interfaces/inspect-options'
import type { Nilable } from '@flex-development/tutils'
import type { InspectOptions } from 'node-inspect-extracted'

describe('unit-d:interfaces/InspectOptions', () => {
  it('should extend Omit<BaseInspectOptions, "colors">', () => {
    expectTypeOf<TestSubject>().toExtend<Omit<InspectOptions, 'colors'>>()
  })

  it('should match [colors?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('colors')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
