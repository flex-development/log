/**
 * @file Type Tests - WithDefaults
 * @module log/interfaces/tests/unit-d/WithDefaults
 */

import type TestSubject from '#interfaces/with-defaults'
import type { InputLogObject, Logger } from '@flex-development/log'

describe('unit-d:interfaces/WithDefaults', () => {
  describe('parameters', () => {
    it('should be callable with [(InputLogObject | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(InputLogObject | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Logger', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Logger>()
    })
  })
})
