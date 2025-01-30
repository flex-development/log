/**
 * @file Unit Tests - icon
 * @module log/internal/tests/unit/icon
 */

import testSubject from '#internal/icon'

describe('unit:internal/icon', () => {
  let fallback: string
  let icon: string

  beforeAll(() => {
    fallback = '!!'
    icon = '▲'
  })

  it('should return `fallback` if unicode is not supported', () => {
    expect(testSubject(icon, fallback, false)).to.eq(fallback)
  })

  it('should return `icon` if unicode is supported', () => {
    expect(testSubject(icon, fallback, true)).to.eq(icon)
  })
})
