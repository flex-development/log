import type { PackageJson } from 'read-pkg'
import { readPackageSync } from 'read-pkg'

/**
 * @file Helpers - Get Package Data
 * @module tools/helpers/pkg
 */

/**
 * Returns `package.json` data.
 *
 * @param {string} [cwd=process.cwd()] - Current working directory
 * @return {PackageJson} `package.json` data
 */
const pkg = (cwd: string = process.cwd()): PackageJson => {
  const data = readPackageSync({ cwd, normalize: false })
  return { ...data, _id: `${data.name}@${data.version}` } as PackageJson
}

/**
 * @property {string} $version - Package version
 */
export const $version: string = pkg().version as string

/**
 * @property {string} $workspace - Name of NPM package
 */
export const $workspace: string = process.env.npm_package_name as string

/**
 * @property {string} name_no_scope - Package name without scope
 */
export const $workspace_no_scope: string = $workspace.split('/')[1]

export default pkg
