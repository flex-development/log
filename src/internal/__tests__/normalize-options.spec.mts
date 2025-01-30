/**
 * @file Unit Tests - normalizeOptions
 * @module log/internal/tests/unit/normalizeOptions
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#internal/normalize-options'
import { isObjectPlain } from '@flex-development/tutils'

describe('unit:internal/normalizeOptions', () => {
  it.each<Parameters<typeof testSubject>>([
    [null],
    [logLevels.info],
    [logTypes.info],
    [{ format: { date: false } }]
  ])('should return logger options object (%#)', options => {
    // Act
    const result = testSubject(options)

    // Expect
    expect(result).to.satisfy(isObjectPlain)
    expect(result).toMatchSnapshot()
  })
})
