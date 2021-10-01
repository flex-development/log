import type { Config } from '@jest/types'
import omit from 'lodash.omit'
import baseConfig from './jest.config.base'
import pkg from './package.json'

/**
 * @file Jest Configuration - Root
 * @see https://jestjs.io/docs/configuration
 */

const config: Config.InitialOptions = {
  ...omit(baseConfig, ['rootDir']),
  displayName: pkg.name.split('/')[1]
}

export default config
