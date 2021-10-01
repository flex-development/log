import defaults from '@log/config/defaults.config'
import { LogColor } from '@log/enums/log-color.enum'
import { LogFigure } from '@log/enums/log-figure.enum'
import { LogLevel } from '@log/enums/log-level.enum'
import type { LogOptions } from '@log/interfaces'
import normalizeOptions from '@log/utils/normalize-options.util'
import type { Testcase } from '@tests/utils/types'
import ch from 'chalk'
import testSubject from '../figure.util'

/**
 * @file Unit Tests - figure
 * @module log/utils/tests/unit/figure
 */

const mockCH = ch as jest.Mocked<typeof ch>

describe('unit:utils/figure', () => {
  type Case = Testcase<string> & {
    options: LogOptions
    state: string
    result: `return ${'empty string' | `string matching ${string}`}`
  }

  const cases: Case[] = [
    {
      expected: '',
      options: defaults,
      result: 'return empty string',
      state: `options.level === '${LogLevel.DEBUG}' && !options.figure`
    },
    {
      expected: '',
      options: { figure: null },
      result: 'return empty string',
      state: 'options.figure === null'
    },
    {
      expected: '',
      options: { figure: '' },
      result: 'return empty string',
      state: 'options.figure is empty string (trimmed)'
    },
    {
      expected: '',
      options: { figure: ' ' },
      result: 'return empty string',
      state: 'options.figure is empty string (untrimmed)'
    },
    {
      expected: '?',
      options: { figure: '?' },
      result: 'return string matching ?',
      state: 'options.figure is non-empty string'
    },
    {
      expected: LogFigure.ERROR,
      options: { level: LogLevel.ERROR },
      result: `return string matching ${LogFigure.ERROR}`,
      state: `options.level === '${LogLevel.ERROR}'`
    },
    {
      expected: LogFigure.ERROR,
      options: { level: 'ERROR' },
      result: `return string matching ${LogFigure.ERROR}`,
      state: `options.level === 'ERROR'`
    },
    {
      expected: LogFigure.INFO,
      options: { level: LogLevel.INFO },
      result: `return string matching ${LogFigure.INFO}`,
      state: `options.level === '${LogLevel.INFO}'`
    },
    {
      expected: LogFigure.INFO,
      options: { level: 'INFO' },
      result: `return string matching ${LogFigure.INFO}`,
      state: `options.level === 'INFO'`
    },
    {
      expected: LogFigure.SUCCESS,
      options: { level: LogLevel.SUCCESS },
      result: `return string matching ${LogFigure.SUCCESS}`,
      state: `options.level === '${LogLevel.SUCCESS}'`
    },
    {
      expected: LogFigure.SUCCESS,
      options: { level: 'SUCCESS' },
      result: `return string matching ${LogFigure.SUCCESS}`,
      state: `options.level === 'SUCCESS'`
    },
    {
      expected: LogFigure.WARN,
      options: { level: LogLevel.WARN },
      result: `return string matching ${LogFigure.WARN}`,
      state: `options.level === '${LogLevel.WARN}'`
    },
    {
      expected: LogFigure.WARN,
      options: { level: 'WARN' },
      result: `return string matching ${LogFigure.WARN}`,
      state: `options.level === 'WARN'`
    }
  ]

  const name = 'should $result if $state'

  it.each<Case>(cases)(name, ({ expected, options }) => {
    // Arrange
    options = normalizeOptions(options)
    const { color = defaults.color, figure, level = 'DEBUG' } = options
    const spy_ch_bold_method = color.figure ?? LogColor[level]
    const spy_ch_bold = jest.spyOn(mockCH.bold, spy_ch_bold_method)

    // Act
    const result = testSubject(options)

    // Expect
    expect(result).toMatch(expected)
    // eslint-disable-next-line jest/no-conditional-expect
    expected && expect(spy_ch_bold).toBeCalledTimes(1)
    // eslint-disable-next-line jest/no-conditional-expect
    expected && expect(spy_ch_bold).toBeCalledWith(figure || LogFigure[level])
  })
})
