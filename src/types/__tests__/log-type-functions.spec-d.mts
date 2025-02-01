/**
 * @file Type Tests - LogTypeFunctions
 * @module log/types/tests/unit-d/LogTypeFunctions
 */

import type TestSubject from '#types/log-type-functions'
import type { LogFunction, LogType } from '@flex-development/log'

describe('unit-d:types/LogTypeFunctions', () => {
  it('should equal Record<LogType, LogFunction>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Record<LogType, LogFunction>>()
  })
})
