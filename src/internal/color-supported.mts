/**
 * @file Internal - COLOR_SUPPORTED
 * @module log/internal/COLOR_SUPPORTED
 */

import { isColorSupported } from '@flex-development/colors'

/**
 * Color output supported?
 *
 * @internal
 *
 * @const {boolean} COLOR_SUPPORTED
 */
const COLOR_SUPPORTED: boolean = isColorSupported()

export default COLOR_SUPPORTED
