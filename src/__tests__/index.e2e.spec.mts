/**
 * @file E2E Tests - api
 * @module log/tests/e2e/api
 */

import * as testSubject from '@flex-development/log'
import { alphabetize, identity } from '@flex-development/tutils'

describe('e2e:log', () => {
  it('should expose public api', () => {
    expect(alphabetize(Object.keys(testSubject), identity)).toMatchSnapshot()
  })
})
