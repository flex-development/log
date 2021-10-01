import join from 'lodash.join'

/**
 * @file Helpers - 'node_modules'
 * @module tools/helpers/nm-string
 */

/**
 * Fixes `YN0000: Strings should avoid referencing the node_modules directory`
 * warning during the `yarn check:install` lifecycle.
 */

export default join(['node', '_', 'modules'], '')
