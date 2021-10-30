import type { Config } from '@jest/types'
import type { PackageJson } from 'read-pkg'

declare global {
  type PackageFilter = (pkg: PackageJson, pkgfile: string) => any
  type PathFilter = (pkg: PackageJson, path: string, relPath: string) => string
  type PackageResolverPath = Config.Path

  type PackageResolver = (
    path: PackageResolverPath,
    options: PackageResolverOptions
  ) => PackageResolverPath

  type PackageResolverOptions = {
    /**
     * Directory to begin resolving from.
     */
    basedir: string

    /**
     * Module import conditions.
     */
    conditions: string[]

    /**
     * Default package resolver function.
     */
    defaultResolver: PackageResolver

    /**
     * Array of file extensions to search.
     */
    extensions: string[]

    /**
     * Directory (or directories) in which to recursively look for modules.
     */
    moduleDirectory: string[]

    /**
     * Function to transform parsed `package.json` contents before looking at
     * the package `main` field.
     */
    packageFilter: PackageFilter

    /**
     * Function to transform package paths.
     */
    pathFilter: PathFilter

    /**
     * Array containing paths to search if nothing is found while recursively
     * searching `moduleDirectory` paths.
     */
    paths: string[]

    /**
     * Project root directory.
     */
    rootDir: string
  }
}

export {}
