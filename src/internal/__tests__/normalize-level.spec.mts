/**
 * @file Unit Tests - normalizeLevel
 * @module log/internal/tests/unit/normalizeLevel
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import testSubject from '#internal/normalize-level'
import type { Logger } from '@flex-development/log'

describe('unit:internal/normalizeLevel', () => {
  let logger: Pick<Logger, 'levels' | 'types'>

  beforeAll(() => {
    logger = {
      levels: logLevels,
      types: {
        [logTypes.debug]: { level: logLevels.debug },
        [logTypes.error]: { level: logLevels.error },
        [logTypes.fail]: { level: logLevels.fail },
        [logTypes.fatal]: { level: logLevels.fatal },
        [logTypes.info]: {},
        [logTypes.log]: { level: logLevels.log },
        [logTypes.ready]: { level: logLevels.ready },
        [logTypes.start]: { level: logLevels.start },
        [logTypes.success]: { level: logLevels.success },
        [logTypes.trace]: { level: logLevels.trace },
        [logTypes.verbose]: { level: logLevels.verbose },
        [logTypes.warn]: { level: logLevels.warn }
      }
    }
  })

  it.each<[number | string | null | undefined]>([
    [-13],
    [logLevels.silent],
    [logLevels.error],
    [logLevels.warn],
    [logLevels.log],
    [logLevels.info],
    [logLevels.debug],
    [logLevels.trace],
    [logLevels.verbose],
    [logLevels.verbose + 1],
    [logTypes.debug],
    [logTypes.error],
    [logTypes.fail],
    [logTypes.fatal],
    [logTypes.info],
    [logTypes.log],
    [logTypes.ready],
    [logTypes.silent],
    [logTypes.start],
    [logTypes.success],
    [logTypes.trace],
    [logTypes.verbose],
    [logTypes.warn],
    [null]
  ])('should return normalized log level (%j)', level => {
    expect(testSubject(logger, level)).toMatchSnapshot()
  })
})
