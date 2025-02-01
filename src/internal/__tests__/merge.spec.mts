/**
 * @file Unit Tests - merge
 * @module log/internal/tests/unit/merge
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#internal/merge'

describe('unit:internal/merge', () => {
  it.each<Parameters<typeof testSubject>>([
    [{ color: 'gray' }, null, { level: logLevels.debug, type: logTypes.debug }],
    [
      {
        [logTypes.debug]: {
          color: 'gray',
          icon: '⚙',
          level: logLevels.debug,
          type: logTypes.debug
        },
        [logTypes.error]: {
          color: 'red',
          level: logLevels.error,
          type: logTypes.error
        }
      },
      {
        [logTypes.debug]: { icon: '→' },
        [logTypes.error]: { badge: true, format: { date: false } }
      }
    ]
  ])('should return merged and mutated object (%#)', (target, ...sources) => {
    // Act
    const result = testSubject(target, ...sources)

    // Expect
    expect(result).to.eq(target)
    expect(result).toMatchSnapshot()
  })

  it.each<Parameters<typeof testSubject>>([
    [
      null,
      { format: { colors: true, columns: 270, date: true, icon: true } },
      { format: { columns: undefined, date: null } }
    ]
  ])('should return new merged object (%#)', (target, ...sources) => {
    // Act
    const result = testSubject(target, ...sources)

    // Expect
    expect(result).not.to.eq(target).and.not.to.eql(target)
    expect(result).toMatchSnapshot()
  })
})
