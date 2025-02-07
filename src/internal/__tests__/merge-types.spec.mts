/**
 * @file Unit Tests - mergeTypes
 * @module log/internal/tests/unit/mergeTypes
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#internal/merge-types'
import type { InputLogObject, LogType } from '@flex-development/log'

describe('unit:internal/mergeTypes', () => {
  let types: Partial<Record<LogType, InputLogObject>>

  beforeAll(() => {
    const check: string = '✔'
    const x: string = '✖'

    types = {
      [logTypes.debug]: { icon: '⚙' },
      [logTypes.error]: { color: 'red', icon: x },
      [logTypes.fail]: { color: 'red', icon: x },
      [logTypes.info]: { color: 'cyan', icon: 'ℹ' },
      [logTypes.ready]: { color: 'green', icon: check },
      [logTypes.start]: { color: 'magenta', icon: '◐' },
      [logTypes.success]: { color: 'green', icon: check },
      [logTypes.trace]: { icon: '→', level: logLevels.debug },
      [logTypes.warn]: { color: 'yellow', icon: '▲' }
    }
  })

  it('should return custom log type to configuration map', () => {
    expect(testSubject(types)).toMatchSnapshot()
  })

  it('should return default log type to configuration map', () => {
    expect(testSubject(null)).toMatchSnapshot()
  })
})
