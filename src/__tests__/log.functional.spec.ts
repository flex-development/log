import defaults from '@log/config/defaults.config'
import type { LogOptions } from '@log/interfaces'
import format from '@log/utils/format.util'
import normalizeOptions from '@log/utils/normalize-options.util'
import type { RestoreConsole } from 'jest-mock-console'
import mockConsole from 'jest-mock-console'
import sh from 'shelljs'
import testSubject from '../log'

/**
 * @file Functional Tests - log
 * @module log/tests/functional/log
 */

jest.mock('@log/utils/format.util')
jest.mock('@log/utils/normalize-options.util')

const mockSH = sh as jest.Mocked<typeof sh>
const mockFormat = format as jest.MockedFunction<typeof format>
const mockNormalizeOptions = normalizeOptions as jest.MockedFunction<
  typeof normalizeOptions
>

describe('functional:log', () => {
  const restoreConsole: RestoreConsole = mockConsole(['log'])
  const spy_console_log = jest.spyOn(console, 'log')

  afterAll(() => restoreConsole())

  it('should normalize options', () => {
    // Arrange
    const options: LogOptions = { level: 'ERROR' }

    // Act
    testSubject('', options)

    // Expect
    expect(mockNormalizeOptions.mock.calls[0][0]).toMatchObject(options)
  })

  it('should format log entry', () => {
    // Arrange
    const options = { ...defaults, args: ['log argument'] }
    const data = 'log message'

    // Act
    testSubject(data, options)

    // Expect
    expect(mockFormat).toBeCalledTimes(1)
    expect(mockFormat).toBeCalledWith(data, mockNormalizeOptions(options))
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
