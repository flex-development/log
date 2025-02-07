/**
 * @file Type Tests - WriteStream
 * @module log/interfaces/tests/unit-d/WriteStream
 */

import type TestSubject from '#interfaces/write-stream'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/WriteStream', () => {
  it('should match [columns: number | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('columns')
      .toEqualTypeOf<Nilable<number>>()
  })

  describe('write', () => {
    type Subject = TestSubject['write']

    it('should match [this: void]', () => {
      expectTypeOf<Subject>().thisParameter.toEqualTypeOf<void>()
    })

    describe('parameters', () => {
      it('should be callable with [string]', () => {
        expectTypeOf<Subject>().parameters.toEqualTypeOf<[string]>()
      })
    })

    describe('returns', () => {
      it('should return boolean | undefined | void', () => {
        expectTypeOf<Subject>()
          .returns
          .toEqualTypeOf<boolean | undefined | void>()
      })
    })
  })
})
