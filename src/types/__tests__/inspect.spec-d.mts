/**
 * @file Type Tests - Inspect
 * @module log/types/tests/unit-d/Inspect
 */

import type TestSubject from '#types/inspect'
import type { InspectOptions } from '@flex-development/log'

describe('unit-d:types/Inspect', () => {
  describe('parameters', () => {
    it('should be callable with [unknown, (InspectOptions | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[unknown, (InspectOptions | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return undefined', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined>()
    })
  })
})
