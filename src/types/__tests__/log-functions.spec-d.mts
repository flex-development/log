/**
 * @file Type Tests - LogFunctions
 * @module log/types/tests/unit-d/LogFunctions
 */

import type TestSubject from '#types/log-functions'
import type { LogFunction, LogType } from '@flex-development/log'

describe('unit-d:types/LogFunctions', () => {
  it('should equal Record<LogType, LogFunction>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Record<LogType, LogFunction>>()
  })
})
