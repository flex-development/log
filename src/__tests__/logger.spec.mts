/**
 * @file Unit Tests - logger
 * @module log/tests/unit/logger
 */

import subject from '#logger'

describe('unit:logger', () => {
  it('should be configured logger', () => {
    expect(subject).to.have.nested.property('reporters.size', 1)
  })
})
