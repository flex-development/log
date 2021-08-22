import defaults from '@flog/config/defaults.config'
import type { FlogOptions } from '@flog/interfaces'
import format from '@flog/utils/format.util'
import type { RestoreConsole } from 'jest-mock-console'
import mockConsole from 'jest-mock-console'
import merge from 'lodash.merge'
import sh from 'shelljs'
import testSubject from '../flog'

/**
 * @file Functional Tests - flog
 * @module flog/tests/functional/flog
 */

jest.mock('@flog/utils/format.util')

const mockSH = sh as jest.Mocked<typeof sh>
const mockFormat = format as jest.MockedFunction<typeof format>
const mockMerge = merge as jest.MockedFunction<typeof merge>

describe('functional:flog', () => {
  const restoreConsole: RestoreConsole = mockConsole(['log'])
  const spy_console_log = jest.spyOn(console, 'log')

  afterAll(() => restoreConsole())

  it('should merge options with defaults', () => {
    // Arrange
    const options: FlogOptions = { level: 'ERROR' }

    // Act
    testSubject('', options)

    // Expect
    expect(mockMerge).toBeCalledTimes(1)
    expect(mockMerge.mock.calls[0][1]).toStrictEqual(defaults)
    expect(mockMerge.mock.calls[0][2]).toStrictEqual(options)
  })

  it('should format log entry', () => {
    // Arrange
    const options = { ...defaults, args: ['log argument'] }
    const data = 'log message'

    // Act
    testSubject(data, options)

    // Expect
    expect(mockFormat).toBeCalledTimes(1)
    expect(mockFormat).toBeCalledWith(data, options)
  })

  describe('options', () => {
    describe('options.shell', () => {
      it('should create entry in console if options.shell is falsy', () => {
        // Arrange
        const data = 'console message'

        // Act
        testSubject(data)

        // Expect
        expect(spy_console_log).toBeCalledTimes(1)
      })

      it('should create entry in terminal if options.shell === true', () => {
        // Arrange
        const data = 'terminal message'

        // Act
        testSubject(data, { shell: true })

        // Expect
        expect(mockSH.echo).toBeCalledTimes(1)
      })
    })

    describe('options.silent', () => {
      it('should not log if options.silent === true', () => {
        // Act
        testSubject('silent console', { silent: true })

        // Expect
        expect(spy_console_log).toBeCalledTimes(0)
      })

      it('should not log if options.shell && options.silent', () => {
        // Act
        testSubject('silent terminal', { shell: true, silent: true })

        // Expect
        expect(mockSH.echo).toBeCalledTimes(0)
      })
    })
  })
})
