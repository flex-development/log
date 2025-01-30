/**
 * @file Type Tests - LogLevel
 * @module log/types/tests/unit-d/LogLevel
 */

import type TestSubject from '#types/log-level'
import type { LogLevelMap } from '@flex-development/log'

describe('unit-d:types/LogLevel', () => {
  it('should equal LogLevelMap[keyof LogLevelMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<LogLevelMap[keyof LogLevelMap]>()
  })
})
