/**
 * @file Type Tests - ReportersOption
 * @module log/types/tests/unit-d/ReportersOption
 */

import type TestSubject from '#types/reporters-option'
import type { Reporter } from '@flex-development/log/reporters'

describe('unit-d:types/ReportersOption', () => {
  it('should extract Reporter', () => {
    expectTypeOf<TestSubject>().extract<Reporter>().not.toBeNever()
  })

  it('should extract Set<Reporter | false | null | undefined>', () => {
    expectTypeOf<TestSubject>()
      .extract<Set<Reporter | false | null | undefined>>()
      .not.toBeNever()
  })

  it('should extract readonly (Reporter | false | null | undefined)[]', () => {
    expectTypeOf<TestSubject>()
      .extract<readonly (Reporter | false | null | undefined)[]>()
      .not.toBeNever()
  })
})
