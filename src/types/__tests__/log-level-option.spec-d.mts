/**
 * @file Type Tests - LogLevelOption
 * @module log/types/tests/unit-d/LogLevelOption
 */

import type TestSubject from '#types/log-level-option'
import type { LogLevel, LogLevelType } from '@flex-development/log'

describe('unit-d:types/LogLevelOption', () => {
  it('should extract LogLevel', () => {
    expectTypeOf<TestSubject>().extract<LogLevel>().not.toBeNever()
  })

  it('should extract LogLevelType', () => {
    expectTypeOf<TestSubject>().extract<LogLevelType>().not.toBeNever()
  })
})
