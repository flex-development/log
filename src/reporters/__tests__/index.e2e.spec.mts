/**
 * @file E2E Tests - reporters
 * @module log/tests/e2e/reporters/api
 */

import * as testSubject from '@flex-development/log/reporters'

describe('e2e:log/reporters', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
