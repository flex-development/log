/**
 * @file Type Tests - LogType
 * @module log/types/tests/unit-d/LogType
 */

import type TestSubject from '#types/log-type'
import type { LogTypeMap } from '@flex-development/log'

describe('unit-d:types/LogType', () => {
  it('should equal LogTypeMap[keyof LogTypeMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<LogTypeMap[keyof LogTypeMap]>()
  })
})
