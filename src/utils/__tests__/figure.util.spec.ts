import defaults from '@flog/config/defaults.config'
import { LogColor } from '@flog/enums/log-color.enum'
import { LogFigure } from '@flog/enums/log-figure.enum'
import type { FlogOptions } from '@flog/interfaces'
import type { Testcase } from '@tests/utils/types'
import ch from 'chalk'
import testSubject from '../figure.util'

/**
 * @file Unit Tests - figure
 * @module flog/utils/figure
 */

const mockCH = ch as jest.Mocked<typeof ch>

describe('unit:utils/figure', () => {
  type Case = Testcase<string> & {
    options: FlogOptions
    state: string
    result: `return ${'empty string' | `string matching ${string}`}`
  }

  const cases: Case[] = [
    {
      expected: '',
      options: defaults,
      result: 'return empty string',
      state: `options.level === 'DEBUG' && !options.figure`
    },
    {
      expected: '',
      options: { figure: null },
      result: 'return empty string',
      state: 'options.figure === null'
    },
    {
      expected: '?',
      options: { figure: '?' },
      result: 'return string matching ?',
      state: 'options.figure is non-empty string'
    },
    {
      expected: LogFigure.ERROR,
      options: { level: 'ERROR' },
      result: `return string matching ${LogFigure.ERROR}`,
      state: `options.level === 'ERROR'`
    },
    {
      expected: LogFigure.INFO,
      options: { level: 'INFO' },
      result: `return string matching ${LogFigure.INFO}`,
      state: `options.level === 'INFO'`
    },
    {
      expected: LogFigure.SUCCESS,
      options: { level: 'SUCCESS' },
      result: `return string matching ${LogFigure.SUCCESS}`,
      state: `options.level === 'SUCCESS'`
    },
    {
      expected: LogFigure.WARN,
      options: { level: 'WARN' },
      result: `return string matching ${LogFigure.WARN}`,
      state: `options.level === 'WARN'`
    }
  ]

  const name = 'should $result if $state'

  it.each<Case>(cases)(name, testcase => {
    // Arrange
    const { expected, options } = testcase
    const { color = defaults.color, figure, level = defaults.level } = options
    const spy_ch_bold_method = color?.figure ?? LogColor[level]
    const spy_ch_bold = jest.spyOn(mockCH.bold, spy_ch_bold_method)

    // Act
    const result = testSubject(options)

    // Expect
    expect(result).toMatch(expected)
    expected && expect(spy_ch_bold).toBeCalledTimes(1)
    expected && expect(spy_ch_bold).toBeCalledWith(figure || LogFigure[level])
  })
})
