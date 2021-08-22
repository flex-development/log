import defaults from '@flog/config/defaults.config'
import type { FlogOptions } from '@flog/interfaces'
import figure from '@flog/utils/figure.util'
import type { TestcaseCalled } from '@tests/utils/types'
import type { Color } from 'chalk'
import ch from 'chalk'
import util from 'util'
import testSubject from '../format.util'

/**
 * @file Functional Tests - format
 * @module flog/utils/tests/format
 */

jest.mock('@flog/utils/figure.util')

const mockCH = ch as jest.Mocked<typeof ch>
const mockFigure = figure as jest.MockedFunction<typeof figure>

describe('functional:utils/format', () => {
  type CaseCalled = Omit<TestcaseCalled, 'call'> & {
    args: any[]
    calledWith: any
    data: any
    options: FlogOptions
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
      expect(mockFigure).toBeCalledWith(defaults)
    })

    it('should format log arguments', () => {
      expect(spy_util_format_apply).toBeCalledTimes(1)
      expect(spy_util_format_apply).toBeCalledWith(util, [])
    })

    it('should trim log', () => {
      expect(spy_string_trim).toBeCalledTimes(1)
    })
  })

  describe('functions and objects', () => {
    const cases: CaseCalled[] = [
      {
        args: [],
        calledWith: [data_obj, false, null],
        data: data_obj,
        expected: 1,
        options: defaults,
        result: 'data'
      },
      {
        args: [data_obj.fn],
        calledWith: [data_obj.fn, false, null],
        data: 'log data',
        expected: 1,
        options: {},
        result: 'arguments'
      }
    ]

    it.each<CaseCalled>(cases)('should inspect log $result', testcase => {
      // Arrange
      const { args, calledWith, data, expected, options } = testcase

      // Act
      testSubject(data, args, options)

      // Expect
      expect(spy_util_inspect).toBeCalledTimes(expected)
      expect(spy_util_inspect).toBeCalledWith(...calledWith)
    })
  })

  describe('options', () => {
    describe('options.bold', () => {
      const cases: CaseCalled[] = [
        {
          args: [data_obj.deep.log],
          calledWith: data_obj.deep.log,
          data: 'log data with args',
          expected: 1,
          options: defaults,
          result: 'bold log arguments'
        },
        {
          args: [],
          calledWith: data_obj.data,
          data: data_obj.data,
          expected: 1,
          options: { bold: { data: true } },
          result: 'bold log data'
        }
      ]

      it.each<CaseCalled>(cases)('should $result', testcase => {
        // Arrange
        const spy_ch_bold = jest.spyOn(mockCH, 'bold')
        const { args, calledWith, data, expected, options } = testcase

        // Act
        testSubject(data, args, options)

        // Expect
        expect(spy_ch_bold).toBeCalledTimes(expected)
        expect(spy_ch_bold).toBeCalledWith(calledWith)
      })
    })

    describe('options.color', () => {
      type Case = CaseCalled & { color: typeof Color }

      const cases: Case[] = [
        {
          args: [data_obj.data],
          calledWith: data_obj.data,
          color: 'magenta',
          data: 'log arguments with custom color',
          expected: 1,
          options: { color: { args: 'magenta' } },
          result: 'set custom log arguments color'
        },
        {
          args: [],
          calledWith: data_obj.data,
          color: 'yellowBright',
          data: data_obj.data,
          expected: 1,
          options: { color: { data: 'yellowBright' } },
          result: 'set custom log data color'
        }
      ]

      it.each<Case>(cases)('should $result', testcase => {
        // Arrange
        const { args, calledWith, color, data, expected, options } = testcase
        const spy_ch_color = jest.spyOn(mockCH, color)

        // Act
        testSubject(data, args, options)

        // Expect
        expect(spy_ch_color).toBeCalledTimes(expected)
        expect(spy_ch_color).toBeCalledWith(calledWith)
      })
    })
  })
})
