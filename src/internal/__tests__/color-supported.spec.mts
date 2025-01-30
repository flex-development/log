/**
 * @file Unit Tests - COLOR_SUPPORTED
 * @module log/internal/tests/unit/COLOR_SUPPORTED
 */

import TEST_SUBJECT from '#internal/color-supported'
import { isColorSupported } from '@flex-development/colors'

describe('unit:internal/COLOR_SUPPORTED', () => {
  it('should equal isColorSupported()', () => {
    expect(TEST_SUBJECT).to.eq(isColorSupported())
  })
})
