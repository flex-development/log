/**
 * @file Unit Tests - mergeTypes
 * @module log/internal/tests/unit/mergeTypes
 */

import testSubject from '#internal/merge-types'

describe('unit:internal/mergeTypes', () => {
  it('should return log type to configuration map', () => {
    expect(testSubject(null, true)).toMatchSnapshot()
  })
})
