import defaults from '@log/config/defaults.config'
import LogLevel from '@log/enums/log-level.enum'
import type { LogOptions } from '@log/interfaces'
import type { Level } from '@log/types'
import type { Testcase } from '@tests/utils/types'
import merge from 'lodash.merge'
import testSubject from '../normalize-options.util'

/**
 * @file Functional Tests - normalizeOptions
 * @module log/utils/tests/functional/normalizeOptions
 */

const mockMerge = merge as jest.MockedFunction<typeof merge>

describe('functional:utils/normalizeOptions', () => {
  it('should merge options with defaults', () => {
    // Arrange
    const options: LogOptions = { level: 'ERROR' }

    // Act
    testSubject(options)

    // Expect
    expect(mockMerge).toBeCalledTimes(1)
    expect(mockMerge.mock.calls[0]).toMatchObject({})
    expect(mockMerge.mock.calls[0]?.[1]).toMatchObject(defaults)
    expect(mockMerge.mock.calls[0]?.[2]).toMatchObject(options)
  })

  describe('options.level', () => {
    type Case = Testcase<keyof typeof LogLevel> & { level: Level }

    const cases: [Case, Case][] = Object.keys(LogLevel).map(key => {
      const level = key as keyof typeof LogLevel

      return [
        { expected: level, level },
        { expected: level, level: LogLevel[level] }
      ]
    })

    const name = `should === '$expected' if options.level === '$level'`

    it.each<Case>(cases.flat())(name, testcase => {
      // Arrange
      const { expected, level } = testcase

      // Act + Expect
      expect(testSubject({ level }).level).toBe(expected)
    })
  })
})
