/**
 * @file Internal - merge
 * @module log/internal/merge
 */

import { ksort, isObjectPlain as pojo } from '@flex-development/tutils'

/**
 * Merge one or more objects into a single object.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {Record<PropertyKey, any>} target
 *  Target object
 * @param {Record<PropertyKey, any>[]} sources
 *  Source object(s)
 * @return {Record<PropertyKey, any>}
 *  Merged object
 */
function merge(
  this: void,
  target: Record<PropertyKey, any>,
  ...sources: Record<PropertyKey, any>[]
): Record<PropertyKey, any> {
  return ksort(sources.reduce<Record<PropertyKey, any>>((acc, source) => {
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

        if (pojo(targetValue) && pojo(value)) {
          value = merge(targetValue, value)
        }
      }

      return target[property] = value, target
    }, acc)
  }, target))
}

export default merge
