/**
 * @file Loaders - Jest Package Resolver
 * @module tools/loaders/packageResolver
 * @see https://github.com/facebook/jest/issues/9771#issuecomment-676828152
 * @see https://jestjs.io/docs/next/configuration#resolver-string
 */

/**
 * Custom resolver that forces Jest to use a package's `module` field. If the
 * field is undefined, the `main` field will be used instead.
 *
 * @param {PackageResolverPath} path - Path to module to resolve
 * @param {PackageResolverOptions} options - Resolver options
 * @return {PackageResolverPath} Resolved path
 */
const packageResolver = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: pkg => ({ ...pkg, main: pkg.module || pkg.main })
  })
}

module.exports = packageResolver
