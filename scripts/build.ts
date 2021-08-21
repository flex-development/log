#!/usr/bin/env node

import log from '@flex-development/grease/utils/log.util'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import fixNodeModulePaths from './fix-node-module-paths'
import exec from './utils/exec'
import { $name } from './utils/pkg-get'

/**
 * @file Scripts - Package Build Workflow
 * @module scripts/pkg-build
 */

export type BuildPackageOptions = {
  /**
   * See the commands that running `build` would run.
   */
  dryRun?: boolean
}

/**
 * @property {yargs.Argv} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .option('dry-run', {
    alias: 'd',
    boolean: true,
    default: false,
    describe: 'see the commands that running build would run',
    type: 'boolean'
  })
  .alias('version', 'v')
  .alias('help', 'h')
  .pkgConf('build')
  .wrap(98)

/**
 * @property {BuildPackageOptions} argv - Command line arguments
 */
const argv: BuildPackageOptions = args.argv as BuildPackageOptions

// Log workflow start
log(argv, `starting build workflow`, [$name, `[dry=${argv.dryRun}]`], 'info')

// Remove stale build directory
exec('rimraf build', argv.dryRun)
log(argv, 'remove stale build directory')

// Build project with ttypescript - https://github.com/cevek/ttypescript
if (exec('ttsc -p tsconfig.prod.json', argv.dryRun) || argv.dryRun) {
  log(argv, 'build project')
}

// Fix node module import paths
fixNodeModulePaths()

// Log workflow end
log(argv, `build workflow complete`, [$name], 'info')
