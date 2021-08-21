import type { Config } from '@jest/types'
import { jsWithTsESM as preset } from 'ts-jest/presets'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

/**
 * @file Jest Configuration - Base
 * @see https://jestjs.io/docs/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest
 */

const TYPE = 'e2e|functional|integration'
const prefix = '<rootDir>'

const config: Config.InitialOptions = {
  ...preset,
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json'
    }
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['node', 'js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix }),
  prettierPath: '<rootDir>/node_modules/prettier',
  reporters: ['default', 'jest-github-reporter'],
  roots: ['<rootDir>/__mocks__', '<rootDir>/src'],
  setupFiles: ['<rootDir>/__tests__/config/setup.ts'],
  setupFilesAfterEnv: [
    'jest-mock-console/dist/setupTestFramework.js',
    '<rootDir>/__tests__/config/setupAfterEnv.ts'
  ],
  testRegex: `(/__tests__/)(spec/(${TYPE}))?(.*)(${TYPE})?.spec.ts$`,
  testRunner: 'jest-jasmine2',
  verbose: true
}

export default config
