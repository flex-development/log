/**
 * @file Type Tests - Create
 * @module log/interfaces/tests/unit-d/Create
 */

import type TestSubject from '#interfaces/create'
import type { Logger, LoggerOptions } from '@flex-development/log'

describe('unit-d:interfaces/Create', () => {
  describe('parameters', () => {
    it('should be callable with [(LoggerOptions | null | undefined)?]', () => {
      expectTypeOf<TestSubject>()
        .parameters
        .toEqualTypeOf<[(LoggerOptions | null | undefined)?]>()
    })
  })

  describe('returns', () => {
    it('should return Logger', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<Logger>()
    })
  })
})
