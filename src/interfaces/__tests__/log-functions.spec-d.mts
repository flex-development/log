/**
 * @file Type Tests - LogFunctions
 * @module log/interfaces/tests/unit-d/LogFunctions
 */

import type TestSubject from '#interfaces/log-functions'
import type { Inspect, LogTypeFunctions } from '@flex-development/log'

describe('unit-d:interfaces/LogFunctions', () => {
  it('should extend LogTypeFunctions', () => {
    expectTypeOf<TestSubject>().toExtend<LogTypeFunctions>()
  })

  it('should match [inspect: Inspect]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inspect')
      .toEqualTypeOf<Inspect>()
  })
})
