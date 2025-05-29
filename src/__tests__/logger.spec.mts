/**
 * @file Unit Tests - logger
 * @module log/tests/unit/logger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import COLOR_SUPPORTED from '#internal/color-supported'
import process from '#internal/process'
import subject from '#logger'
import isUnicodeSupported from '@flex-development/is-unicode-supported'
import { isObjectPlain } from '@flex-development/tutils'

describe('unit:logger', () => {
  let browser: boolean
  let types: string[]

  beforeAll(() => {
    browser = process.env.VITEST_ENVIRONMENT !== 'node'

    types = Object.keys(logTypes).filter(k => {
      return k !== logTypes.inspect && k !== logTypes.silent
    })
  })

  it('should be logger object', () => {
    expect(subject).to.have.property('browser', browser)
    expect(subject).to.have.property('color', COLOR_SUPPORTED)
    expect(subject).to.have.property('colors').satisfy(isObjectPlain)
    expect(subject).to.have.property('eol', '\n')
    expect(subject).to.have.property('format').satisfy(isObjectPlain)
    expect(subject).to.have.property('level', logLevels.info)
    expect(subject).to.have.property('levels', logLevels)
    expect(subject).to.have.property('reporters').be.instanceof(Set)
    expect(subject).to.have.nested.property('reporters.size', 1)
    expect(subject).to.have.property('stderr', process.stderr)
    expect(subject).to.have.property('stdout', process.stdout)
    expect(subject).to.have.property('types').with.keys(types)
    expect(subject).to.have.property('unicode', isUnicodeSupported())
    expect(subject.format).to.have.keys(['colors'])
    expect(subject.format).to.have.property('colors', COLOR_SUPPORTED)
  })
})
