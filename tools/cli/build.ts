#!/usr/bin/env node

import Exception from '@flex-development/exceptions/exceptions/base.exception'
import logger from '@flex-development/grease/utils/logger.util'
import LogLevel from '@log/enums/log-level.enum'
import type { PackageJson } from 'read-pkg'
import sh from 'shelljs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import exec from '../helpers/exec'
import fixNodeModulePaths from '../helpers/fix-node-module-paths'
import pkg, { $name } from '../helpers/pkg-get'

/**
 * @file CLI - Build Workflow
 * @module tools/cli/build
 */

export type BuildOptions = {
  /**
   * Name of build environment.
   *
   * @default 'production'
   */
  env?: 'development' | 'production' | 'test'

  /** @see BuildOptions.env */
  e?: BuildOptions['env']

  /**
   * See the commands that running `build` would run.
   *
   * @default false
   */
  dryRun?: boolean

  /** @see BuildOptions.dryRun */
  d?: BuildOptions['dryRun']

  /**
   * Specify module build formats.
   *
   * @default ['cjs','esm','types']
   */
  formats?: ('cjs' | 'esm' | 'types')[]

  /** @see BuildOptions.formats */
  f?: BuildOptions['formats']

  /**
   * Run preliminary `yarn install` if package contains build scripts.
   *
   * @default false
   */
  packInstall?: boolean

  /** @see BuildOptions.packInstall */
  i?: BuildOptions['packInstall']

  /**
   * Create tarball at specified path.
   *
   * @default '%s-%v.tgz'
   */
  out?: string

  /** @see BuildOptions.out */
  o?: BuildOptions['out']

  /**
   * Run `prepack` script.
   *
   * @default false
   */
  prepack?: boolean

  /** @see BuildOptions.prepack */
  p?: BuildOptions['prepack']

  /**
   * Pack the project once build is complete.
   *
   * @default false
   */
  tarball?: boolean

  /** @see BuildOptions.tarball */
  t?: BuildOptions['tarball']
}

/**
 * @property {string[]} BUILD_FORMATS - Module build formats
 */
const BUILD_FORMATS: BuildOptions['formats'] = ['cjs', 'esm', 'types']

/**
 * @property {string} COMMAND_PACK - Base pack command
 */
const COMMAND_PACK: string = 'yarn pack'

/**
 * @property {string[]} ENV_CHOICES - Build environment options
 */
const ENV_CHOICES: BuildOptions['env'][] = ['production', 'test', 'development']

/**
 * @property {PackageJson} PACKAGE - package.json data
 */
const PACKAGE: PackageJson = pkg()

/**
 * @property {yargs.Argv} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .option('env', {
    alias: 'e',
    choices: ENV_CHOICES,
    default: 'production',
    describe: 'name of build environment',
    requiresArg: true,
    string: true,
    type: 'string'
  })
  .option('dry-run', {
    alias: 'd',
    boolean: true,
    default: false,
    describe: 'see the commands that running `build` would run',
    type: 'boolean'
  })
  .option('formats', {
    alias: 'f',
    array: true,
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    description: 'specify module build format(s)'
  })
  .option('out', {
    alias: 'o',
    default: '%s-%v.tgz',
    description: 'create tarball at specified path',
    requiresArg: true,
    string: true,
    type: 'string'
  })
  .option('pack-install', {
    alias: 'i',
    boolean: true,
    default: false,
    description: 'run `yarn install` if package contains build scripts'
  })
  .option('prepack', {
    alias: 'p',
    boolean: true,
    default: false,
    description: 'run `prepack` script'
  })
  .option('tarball', {
    alias: 't',
    boolean: true,
    default: false,
    description: 'pack the project once build is complete'
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

  // Build project with ttypescript - https://github.com/cevek/ttypescript
  for (const format of argv.formats ?? []) {
    // Get tsconfig config file and path
    const tsconfig: string = `tsconfig.prod.${format}.json`

    // Remove stale directory
    exec(`rimraf ./${format}`, argv.dryRun)
    logger(argv, `remove stale ${format} directory`)

    // Run build command
    if (exec(`ttsc -p ${tsconfig}`, argv.dryRun) || argv.dryRun) {
      logger(argv, `build ${format}`)
    }
  }

  // Fix node module import paths
  fixNodeModulePaths()

  // Pack project
  if (argv.tarball) {
    const { dryRun, out: outFile, packInstall, prepack } = argv

    // Pack command flags
    const flags = [
      `${dryRun ? '--dry-run' : ''}`,
      `--out ${outFile}`,
      `${packInstall ? '--install-if-needed' : ''}`
    ]

    // Check if package has postinstall and prepack scripts
    const postinstall_script = typeof PACKAGE.scripts?.postinstall === 'string'
    const prepack_script = typeof PACKAGE.scripts?.prepack === 'string'

    // Check if prepack script should be disabled
    const disable_prepack = prepack_script && !prepack

    // Disable postinstall script
    postinstall_script && exec('toggle-scripts -postinstall', dryRun)
    postinstall_script && logger(argv, 'disable postinstall script')

    // Disable prepack script
    disable_prepack && exec('toggle-scripts -prepack', dryRun)
    disable_prepack && logger(argv, 'disable prepack script')

    // Execute pack command
    exec(`${COMMAND_PACK} ${flags.join(' ')}`.trim(), dryRun)
    logger(argv, 'create tarball')

    // Renable postinstall script
    postinstall_script && exec('toggle-scripts +postinstall', dryRun)
    postinstall_script && logger(argv, 'renable postinstall script')

    // Renable prepack script
    disable_prepack && exec('toggle-scripts +prepack', dryRun)
    disable_prepack && logger(argv, 'renable prepack script')
  }
} catch (error) {
  const exception = error as Exception

  logger(argv, exception.message, [], LogLevel.ERROR)
  sh.exit((exception.data?.code as number) ?? 1)
}

// Log workflow end
logger(argv, 'build workflow complete', [$name], LogLevel.INFO)
