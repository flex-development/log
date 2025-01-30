/**
 * @file Unit Tests - isLogObject
 * @module log/internal/tests/unit/isLogObject
 */

import logLevels from '#enums/log-levels'
import testSubject from '#internal/is-log-object'

describe('unit:internal/isLogObject', () => {
  it.each<Parameters<typeof testSubject>>([
    [logLevels.info],
    [new Date()],
    [null],
    [{ args: null }],
    [{ message: undefined }]
  ])('should return `false` if `value` is not log object (%#)', value => {
    expect(testSubject(value)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    [new Error()],
    [{ args: ['world'], message: 'hello %s' }],
    [{ message: 'hello' }]
  ])('should return `true` if `value` is log object (%#)', value => {
    expect(testSubject(value)).to.be.true
  })
})
