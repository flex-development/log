import defaults from '@log/config/defaults.config'
import LogLevel from '@log/enums/log-level.enum'
import type { LogOptions } from '@log/interfaces'
import type { Level } from '@log/types'
import figure from '@log/utils/figure.util'
import normalizeOptions from '@log/utils/normalize-options.util'
import type { TestcaseCalled } from '@tests/utils/types'
import type { Color } from 'chalk'
import ch from 'chalk'
import util from 'util'
import testSubject from '../format.util'

/**
 * @file Functional Tests - format
 * @module log/utils/tests/functional/format
 */

jest.mock('@log/utils/figure.util')
jest.mock('@log/utils/normalize-options.util')

const mockCH = ch as jest.Mocked<typeof ch>
const mockFigure = figure as jest.MockedFunction<typeof figure>
const mockNormalizeOptions = normalizeOptions as jest.MockedFunction<
  typeof normalizeOptions
>

describe('functional:utils/format', () => {
  type CaseCalled = Omit<TestcaseCalled, 'call'> & {
    calledWith: any
    data: any
    options: LogOptions
    result: string
  }

  const spy_util_inspect = jest.spyOn(util, 'inspect')
  const data_obj = { data: 'data', deep: { log: true }, fn: jest.fn() }

  describe('formatted log', () => {
    // @ts-expect-error 'string' not assignable to parameter of type 'never'
    const spy_util_format_apply = jest.spyOn(util.format, 'apply')
    const spy_string_trim = jest.spyOn(String.prototype, 'trim')

    const data = 'log message'

    beforeEach(() => {
      testSubject(data)
    })

    it('should add log figure', () => {
      expect(mockFigure).toBeCalledTimes(1)
      expect(mockFigure).toBeCalledWith(mockNormalizeOptions(defaults))
    })

    it('should format log arguments', () => {
      expect(spy_util_format_apply).toBeCalledTimes(1)
      expect(spy_util_format_apply).toBeCalledWith(util, [])
    })

    it('should trim log', () => {
      expect(spy_string_trim).toBeCalledTimes(1)
    })
  })

  describe('functions and object types', () => {
    const cases: CaseCalled[] = [
      {
        calledWith: [data_obj.fn, false, null],
        data: 'log data',
        expected: 1,
        options: { args: [data_obj.fn] },
        result: 'arguments'
      },
      {
        calledWith: [data_obj, false, null],
        data: data_obj,
        expected: 1,
        options: defaults,
        result: 'data'
      }
    ]

    it.each<CaseCalled>(cases)('should inspect log $result', testcase => {
      // Arrange
      const { calledWith, data, expected, options } = testcase

      // Act
      testSubject(data, options)

      // Expect
      expect(spy_util_inspect).toBeCalledTimes(expected)
      expect(spy_util_inspect).toBeCalledWith(...calledWith)
    })
  })

  describe('options', () => {
    it('should normalize options', () => {
      // Arrange
      const options = { level: LogLevel.INFO as Level }

      // Act
      testSubject(`${options.level} message`, options)

      // Expect
      expect(mockNormalizeOptions.mock.calls[0][0]).toMatchObject(options)
    })

    describe('options.bold', () => {
      const cases: CaseCalled[] = [
        {
          calledWith: mockCH.gray(data_obj.deep.log),
          data: 'log data with args',
          expected: 1,
          options: { ...defaults, args: [data_obj.deep.log] },
          result: 'bold log arguments'
        },
        {
          calledWith: mockCH.gray(data_obj.data),
          data: data_obj.data,
          expected: 1,
          options: { args: [], bold: { data: true } },
          result: 'bold log data'
        }
      ]

      it.each<CaseCalled>(cases)('should $result', testcase => {
        // Arrange
        const spy_ch_bold = jest.spyOn(mockCH, 'bold')
        const { calledWith, data, expected, options } = testcase

        // Act
        testSubject(data, options)

        // Expect
        expect(spy_ch_bold).toBeCalledTimes(expected)
        expect(spy_ch_bold).toBeCalledWith(calledWith)
      })
    })

    describe('options.color', () => {
      type Case = CaseCalled & { color: typeof Color }

      const cases: Case[] = [
        {
          calledWith: data_obj.data,
          color: 'magenta',
          data: 'log arguments with custom color',
          expected: 1,
          options: { args: [data_obj.data], color: { args: 'magenta' } },
          result: 'set custom log arguments color'
        },
        {
          calledWith: data_obj.data,
          color: 'yellowBright',
          data: data_obj.data,
          expected: 1,
          options: { args: [], color: { data: 'yellowBright' } },
          result: 'set custom log data color'
        }
      ]

      it.each<Case>(cases)('should $result', testcase => {
        // Arrange
        const { calledWith, color, data, expected, options } = testcase
        const spy_ch_color = jest.spyOn(mockCH, color)

        // Act
        testSubject(data, options)

        // Expect
        expect(spy_ch_color).toBeCalledTimes(expected)
        expect(spy_ch_color).toBeCalledWith(calledWith)
      })
    })
  })
})
