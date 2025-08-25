/**
 * @file Type Tests - WithTag
 * @module log/interfaces/tests/unit-d/WithTag
 */

import type TestSubject from '#interfaces/with-tag'
import type { Logger } from '@flex-development/log'

describe('unit-d:interfaces/WithTag', () => {
  describe('parameters', () => {
    it('should be callable with [string, (string | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[string, (string | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Logger', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Logger>()
    })
  })
})
