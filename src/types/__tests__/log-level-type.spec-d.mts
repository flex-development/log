/**
 * @file Type Tests - LogLevelType
 * @module log/types/tests/unit-d/LogLevelType
 */

import type TestSubject from '#types/log-level-type'
import type { LogLevelMap } from '@flex-development/log'

describe('unit-d:types/LogLevelType', () => {
  it('should equal Extract<keyof LogLevelMap, string>', () => {
    expectTypeOf<TestSubject>()
      .toEqualTypeOf<Extract<keyof LogLevelMap, string>>()
  })
})
