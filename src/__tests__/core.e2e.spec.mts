/**
 * @file E2E Tests - core
 * @module log/tests/e2e/core
 */

import * as testSubject from '@flex-development/log/core'
import { alphabetize, identity } from '@flex-development/tutils'

describe('e2e:log/core', () => {
  it('should expose public api', () => {
    expect(alphabetize(Object.keys(testSubject), identity)).toMatchSnapshot()
  })
})
