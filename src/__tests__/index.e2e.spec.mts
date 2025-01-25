/**
 * @file E2E Tests - api
 * @module log/tests/e2e/api
 */

import * as testSubject from '@flex-development/log'

describe('e2e:log', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
