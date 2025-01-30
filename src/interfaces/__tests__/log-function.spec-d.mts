/**
 * @file Type Tests - LogFunction
 * @module log/interfaces/tests/unit-d/LogFunction
 */

import type TestSubject from '#interfaces/log-function'
import type { InputLogObject } from '@flex-development/log'

describe('unit-d:interfaces/LogFunction', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [InputLogObject | string, ...unknown[]] | [unknown, ...unknown[]]', () => {
      // Arrange
      type Expect =
        | [InputLogObject | string, ...unknown[]]
        | [unknown, ...unknown[]]

      // Expect
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return undefined | void', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<undefined | void>()
    })
  })
})
