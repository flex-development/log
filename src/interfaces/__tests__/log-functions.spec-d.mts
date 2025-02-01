/**
 * @file Type Tests - LogFunctions
 * @module log/interfaces/tests/unit-d/LogFunctions
 */

import type TestSubject from '#interfaces/log-functions'
import type { InspectOptions, LogTypeFunctions } from '@flex-development/log'

describe('unit-d:interfaces/LogFunctions', () => {
  it('should extend LogTypeFunctions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<LogTypeFunctions>()
  })

  describe('inspect', () => {
    type Subject = TestSubject['inspect']

    it('should match [this: void]', () => {
      expectTypeOf<Subject>().thisParameter.toEqualTypeOf<void>()
    })

    describe('parameters', () => {
      it('should be callable with [unknown, (InspectOptions | null | undefined)?]', () => {
        // Arrange
        type Expect = [unknown, (InspectOptions | null | undefined)?]

        // Expect
        expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
      })
    })

    describe('returns', () => {
      it('should return undefined', () => {
        expectTypeOf<Subject>().returns.toEqualTypeOf<undefined>()
      })
    })
  })
})
