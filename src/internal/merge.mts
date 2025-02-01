/**
 * @file Internal - merge
 * @module log/internal/merge
 */

import { ksort, isObjectPlain as pojo, sift } from '@flex-development/tutils'

/**
 * Merge one or more objects into a single object.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @internal
 *
 * @template {Record<PropertyKey, any>} M
 *  Merged object type
 *
 * @this {void}
 *
 * @param {Record<PropertyKey, any> | null | undefined} target
 *  Target object
 * @param {(Record<PropertyKey, any> | null | undefined)[]} sources
 *  Source object(s)
 * @return {M}
 *  Merged object
 */
function merge<M extends Record<PropertyKey, any>>(
  this: void,
  target: Record<PropertyKey, any> | null | undefined,
  ...sources: (Record<PropertyKey, any> | null | undefined)[]
): M {
  return ksort(sift(sources).reduce((acc, source) => {
    return [
      ...Object.getOwnPropertySymbols(source),
      ...Object.getOwnPropertyNames(source)
    ].reduce((target, property) => {
      /**
       * Source object value.
       *
       * @var {any} value
       */
      let value: any = source[property]

      if (Object.prototype.hasOwnProperty.call(target, property)) {
        /**
         * Target object value.
         *
         * @const {any} targetValue
         */
        const targetValue: any = target[property]

        if (value === undefined) {
          value = targetValue
        } else if (pojo(targetValue) && pojo(value)) {
          value = merge(targetValue, value)
        }
      }

      return target[property] = value, target
    }, acc)
  }, target ?? {}))
}

export default merge
