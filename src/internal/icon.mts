/**
 * @file Internal - icon
 * @module log/internal/icon
 */

/**
 * Get an icon based on unicode support.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {string} icon
 *  Unicode icon
 * @param {string} fallback
 *  Icon to use if unicode is not supported
 * @param {boolean} unicode
 *  Unicode supported?
 * @return {string}
 *  Icon string
 */
function icon(
  this: void,
  icon: string,
  fallback: string,
  unicode: boolean
): string {
  return unicode ? icon : fallback
}

export default icon
