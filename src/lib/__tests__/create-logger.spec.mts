/**
 * @file Unit Tests - createLogger
 * @module log/lib/tests/unit/createLogger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import COLOR_SUPPORTED from '#internal/color-supported'
import process from '#internal/process'
import testSubject from '#lib/create-logger'
import isUnicodeSupported from '@flex-development/is-unicode-supported'
import type {
  InputLogObject,
  Logger,
  LoggerOptions
} from '@flex-development/log'
import { isObjectPlain as pojo } from '@flex-development/tutils'

describe('unit:lib/createLogger', () => {
  let browser: boolean
  let types: string[]

  beforeAll(() => {
    browser = process.env.VITEST_ENVIRONMENT !== 'node'

    types = Object.keys(logTypes).filter(k => {
      return k !== logTypes.inspect && k !== logTypes.silent
    })
  })

  it('should return logger object', () => {
    // Act
    const result = testSubject()

    // Expect
    expect(result).to.have.property('browser', browser)
    expect(result).to.have.property('color', COLOR_SUPPORTED)
    expect(result).to.have.property('colors').satisfy(pojo)
    expect(result).to.have.property('create').be.a('function')
    expect(result).to.have.property('defaults').satisfy(pojo).and.eql({})
    expect(result).to.have.property('eol', '\n')
    expect(result).to.have.property('format').satisfy(pojo)
    expect(result).to.have.property('level', logLevels.info)
    expect(result).to.have.property('levels', logLevels)
    expect(result).to.have.property('options').satisfy(pojo).and.eql({})
    expect(result).to.have.property('reporters').be.instanceof(Set)
    expect(result).to.have.nested.property('reporters.size', 0)
    expect(result).to.have.property('stderr', process.stderr)
    expect(result).to.have.property('stdout', process.stdout)
    expect(result).to.have.property('types').with.keys(types)
    expect(result).to.have.property('unicode', isUnicodeSupported())
    expect(result.format).to.have.keys(['colors'])
    expect(result.format).to.have.property('colors', COLOR_SUPPORTED)
  })

  describe('#create', () => {
    let subject: Logger

    beforeAll(() => {
      subject = testSubject()
    })

    it('should return new logger with overrides applied', () => {
      // Arrange
      const options: LoggerOptions = { level: logLevels.log }

      // Act
      const result = subject.create(options)

      // Expect
      expect(result).to.not.eq(subject)
      expect(result.colors).to.not.eq(subject.colors)
      expect(result.defaults).to.not.eq(subject.defaults)
      expect(result.format).to.not.eq(subject.format)
      expect(result.level).to.be.a('number').and.eq(options.level)
      expect(result.options).to.eql(options)
      expect(result.reporters).to.not.eq(subject.reporters)
      expect(result.types).to.not.eq(subject.types)
    })
  })

  describe('#withDefaults', () => {
    let subject: Logger

    beforeAll(() => {
      subject = testSubject()
    })

    it('should return new logger with `defaults` applied', () => {
      // Arrange
      const defaults: InputLogObject = { level: logLevels.log }

      // Act + Expect
      expect(subject.withDefaults(defaults).defaults).to.eq(defaults)
    })
  })

  describe('#withTag', () => {
    it.each<[
      parent: string | null | undefined,
      ...Parameters<Logger['withTag']>
    ]>([
      ['', 'grease'],
      ['grease', 'bump'],
      ['grease', 'changelog', '/'],
      [null, 'grease']
    ])('should return new logger with `tag` applied (%j -> %j)', (
      parent,
      tag,
      separator
    ) => {
      // Arrange
      const defaults: InputLogObject = { tag: parent }

      // Act
      const result = testSubject({ defaults }).withTag(tag, separator)

      // Expect
      expect(result.defaults.tag).to.be.a('string').and.not.empty
      expect(result.defaults.tag).toMatchSnapshot()
    })
  })
})
