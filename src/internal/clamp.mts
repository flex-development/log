/**
 * @file Internal - clamp
 * @module log/internal/clamp
 */

/**
 * Clamp `n` within the range `[min, max]`.
 *
 * @internal
 *
 * @template {number} T
 *  Clamped number
 *
 * @this {void}
 *
 * @param {number} n
 *  Number to clamp
 * @param {number | null | undefined} [min]
 *  Lower bound (inclusive)
 * @param {number | null | undefined} [max]
 *  Upper bound (inclusive)
 * @return {T}
 *  Clamped number
 */
function clamp<T extends number>(
  this: void,
  n: number,
  min?: number | null | undefined,
  max?: number | null | undefined
): T {
  min ??= 0
  max ??= Number.MAX_SAFE_INTEGER
  return (n < min ? min : n > max ? max : n) as T
}

export default clamp
