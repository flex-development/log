/**
 * @file Utility - inspectable
 * @module log/utils/inspectable
 */

/**
 * Returns `true` if the `value` should be logged using `util.inspect`.
 *
 * @param {any} value - Value to check
 * @return {boolean} `true` if `value` is a function, object type, or `null`
 */
const inspectable = (value: any): boolean => {
  return typeof value === 'function' || typeof value === 'object'
}

export default inspectable
