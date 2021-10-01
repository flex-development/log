#!/usr/bin/env node

import Exception from '@flex-development/exceptions/exceptions/base.exception'
import logger from '@flex-development/grease/utils/logger.util'
import { LogLevel } from '@log/enums/log-level.enum'
import { copyFileSync, existsSync } from 'fs-extra'
import path from 'path'
import sh from 'shelljs'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import exec from '../helpers/exec'
import fixNodeModulePaths from '../helpers/fix-node-module-paths'
import { $name } from '../helpers/pkg-get'

/**
 * @file Scripts - Build Workflow
 * @module scripts/build
 */

export type BuildOptions = {
  /**
   * Name of build environment.
   *
   * @default 'production'
   */
  env?: 'development' | 'production' | 'test'

  /**
   * See the commands that running `build` would run.
   */
  dryRun?: boolean

  /**
   * Specify module build formats.
   */
  formats?: ('cjs' | 'esm' | 'types')[]
}

/**
 * @property {string[]} BUILD_FORMATS - Module build formats
 */
const BUILD_FORMATS: BuildOptions['formats'] = ['cjs', 'esm', 'types']

/**
 * @property {string} TSCONFIG_PROD - Base production config file
 */
const TSCONFIG_PROD: string = 'tsconfig.prod.json'

/**
 * @property {yargs.Argv} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .option('env', {
    alias: 'e',
    default: 'production',
    describe: 'name of build environment',
    requiresArg: true,
    type: 'string'
  })
  .option('dry-run', {
    alias: 'd',
    boolean: true,
    default: false,
    describe: 'see the commands that running build would run',
    type: 'boolean'
  })
  .option('formats', {
    alias: 'f',
    array: true,
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    description: 'specify module build format(s)'
  })
  .alias('version', 'v')
  .alias('help', 'h')
  .pkgConf('build')
  .wrap(98)

/**
 * @property {BuildOptions} argv - Command line arguments
 */
const argv: BuildOptions = args.argv as BuildOptions

// Log workflow start
logger(
  argv,
  'starting build workflow',
  [$name, `[dry=${argv.dryRun}]`],
  LogLevel.INFO
)

try {
  // Set environment variables
  exec(`dotenv -c ${argv.env} -- true`, argv.dryRun)
  logger(argv, `set ${argv.env} environment variables`)

  // Check if base TypeScript config file already exists
  const HAS_TSCONFIG = existsSync(path.join(process.cwd(), TSCONFIG_PROD))

  // Copy base TypeScript config file if base does not exist
  if (!HAS_TSCONFIG && !argv.dryRun) {
    copyFileSync(path.join('..', '..', TSCONFIG_PROD), TSCONFIG_PROD)
  }

  // Build project with ttypescript - https://github.com/cevek/ttypescript
  for (const format of argv.formats || []) {
    // Get tsconfig config file and path
    const tsconfig: string = `tsconfig.prod.${format}.json`
    const tsconfig_path: string = path.join(process.cwd(), tsconfig)

    // Remove stale directory
    exec(`rimraf ${format} directory`, argv.dryRun)
    logger(argv, `remove stale ${format} directory`)

    // Check if config file already exists
    const has_tsconfig = existsSync(tsconfig_path)

    // Copy config file if base does not exist
    if (!has_tsconfig && !argv.dryRun) {
      copyFileSync(path.join('..', '..', tsconfig), tsconfig)
    }

    // Run build command
    if (exec(`ttsc -p ${tsconfig}`, argv.dryRun) || argv.dryRun) {
      logger(argv, `create ${format}`)
    }

    // Remove config file
    if (!HAS_TSCONFIG) exec(`rimraf ${tsconfig}`, argv.dryRun)
  }

  // Remove base TypeScript config file
  if (!HAS_TSCONFIG && !argv.dryRun)
    exec(`rimraf ${TSCONFIG_PROD}`, argv.dryRun)

  // Fix node module import paths
  fixNodeModulePaths()
} catch (error) {
  const exception = error as Exception

  logger(argv, exception.message, [], LogLevel.ERROR)
  sh.exit(exception.data.code)
}

// Log workflow end
logger(argv, 'build workflow complete', [$name], LogLevel.INFO)
