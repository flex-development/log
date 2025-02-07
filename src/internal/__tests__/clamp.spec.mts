/**
 * @file Unit Tests - clamp
 * @module log/internal/tests/unit/clamp
 */

import testSubject from '#internal/clamp'

describe('unit:internal/clamp', () => {
  it('should return return `max` if `n` is greater than `max`', () => {
    // Arrange
    const max: number = 13

    // Act + Expect
    expect(testSubject(max * max, null, max)).to.eq(max)
  })

  it('should return return `min` if `n` is less than `min`', () => {
    // Arrange
    const min: number = 13

    // Act + Expect
    expect(testSubject(min * -1, min)).to.eq(min)
  })

  it('should return `n` if `n` is in the range `[min,max]`', () => {
    // Arrange
    const n: number = 13

    // Act + Expect
    expect(testSubject(n)).to.eq(n)
  })
})
