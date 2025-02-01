/**
 * @file Unit Tests - logger
 * @module log/tests/unit/logger
 */

import logLevels from '#enums/log-levels'
import logTypes from '#enums/log-types'
import COLOR_SUPPORTED from '#internal/color-supported'
import process from '#internal/process'
import subject from '#logger'
import { isObjectPlain } from '@flex-development/tutils'
import isUnicodeSupported from 'is-unicode-supported'

describe('unit:logger', () => {
  let types: string[]

  beforeAll(() => {
    types = Object.keys(logTypes).filter(k => k !== logTypes.inspect)
  })

  it('should be logger object', () => {
    expect(subject).to.have.property('browser', false)
    expect(subject).to.have.property('color', COLOR_SUPPORTED)
    expect(subject).to.have.property('colors').satisfy(isObjectPlain)
    expect(subject).to.have.property('eol', '\n')
    expect(subject).to.have.property('format').satisfy(isObjectPlain)
    expect(subject).to.have.property('level', logLevels.info)
    expect(subject).to.have.property('levels', logLevels)
    expect(subject).to.have.property('reporters').be.an('array').that.is.empty
    expect(subject).to.have.property('stderr', process.stderr)
    expect(subject).to.have.property('stdout', process.stdout)
    expect(subject).to.have.property('types').with.keys(types)
    expect(subject).to.have.property('unicode', isUnicodeSupported())
    expect(subject.format).to.have.keys(['colors'])
    expect(subject.format).to.have.property('colors', COLOR_SUPPORTED)
  })
})
