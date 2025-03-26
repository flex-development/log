/**
 * @file E2E Tests - core
 * @module log/tests/e2e/core
 */

import * as testSubject from '@flex-development/log/core'

describe('e2e:log/core', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
