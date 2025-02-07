/**
 * @file Unit Tests - isLogObject
 * @module log/internal/tests/unit/isLogObject
 */

import logLevels from '#enums/log-levels'
import error from '#fixtures/error'
import testSubject from '#internal/is-log-object'

describe('unit:internal/isLogObject', () => {
  it.each<Parameters<typeof testSubject>>([
    [logLevels.info],
    [new Date()],
    [null],
    [{ args: null }],
    [{}]
  ])('should return `false` if `value` is not log object (%#)', value => {
    expect(testSubject(value)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [error],
    [{ args: ['world'], message: 'hello %s' }],
    [{ message: undefined }]
  ])('should return `true` if `value` is log object (%#)', value => {
    expect(testSubject(value)).to.be.true
  })
})
