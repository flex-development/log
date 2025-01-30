/**
 * @file Unit Tests - merge
 * @module log/internal/tests/unit/merge
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#internal/merge'

describe('unit:internal/merge', () => {
  it.each<Parameters<typeof testSubject>>([
    [
      {
        level: logLevels.debug,
        type: logTypes.debug
      },
      {
        color: 'gray'
      }
    ],
    [
      {
        [logTypes.debug]: {
          color: 'gray',
          level: logLevels.debug,
          type: logTypes.debug
        },
        [logTypes.error]: {
          color: 'red',
          level: logLevels.error,
          type: logTypes.error
        },
        [logTypes.fail]: {
          color: 'red',
          level: logLevels.error,
          type: logTypes.fail
        },
        [logTypes.info]: {
          color: 'cyan',
          level: logLevels.info,
          type: logTypes.info
        },
        [logTypes.inspect]: {
          level: logLevels.log,
          type: logTypes.inspect
        },
        [logTypes.log]: {
          level: logLevels.log
        },
        [logTypes.start]: {
          color: 'magenta',
          level: logLevels.info,
          type: logTypes.start
        },
        [logTypes.success]: {
          color: 'green',
          level: logLevels.info,
          type: logTypes.success
        },
        [logTypes.warn]: {
          color: 'yellow',
          level: logLevels.warn,
          type: logTypes.warn
        }
      },
      {
        [logTypes.error]: { badge: true, format: { date: false } },
        [logTypes.inspect]: { level: logLevels.debug }
      }
    ]
  ])('should return merged object (%#)', (target, ...sources) => {
    expect(testSubject(target, ...sources)).toMatchSnapshot()
  })
})
