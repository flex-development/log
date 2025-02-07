/**
 * @file Fixtures - error
 * @module fixtures/error
 */

import pathe from '@flex-development/pathe'
import { dedent } from 'ts-dedent'

/**
 * URL of current working directory.
 *
 * @const {URL} cwd
 */
const cwd: URL = pathe.pathToFileURL(pathe.cwd())

/**
 * Fixture error.
 *
 * @const {Error} error
 */
const error: Error = new Error('This is an example error. Everything is fine!')

error.stack = dedent`
  ${error.name}: ${error.message}
      at ${cwd.pathname}/__fixtures__/error.mts:21:22
      at VitestExecutor.runModule (${cwd.href}/node_modules/vite-node/dist/client.mjs:399:5)
      at VitestExecutor.directRequest (${cwd.href}/node_modules/vite-node/dist/client.mjs:381:5)
      at VitestExecutor.cachedRequest (${cwd.href}/node_modules/vite-node/dist/client.mjs:206:14)
      at VitestExecutor.dependencyRequest (${cwd.href}/node_modules/vite-node/dist/client.mjs:259:12)
      at ${cwd.pathname}/src/reporters/__tests__/fancy.reporter.functional.spec.mts:9:1
      at VitestExecutor.runModule (${cwd.href}/node_modules/vite-node/dist/client.mjs:399:5)
      at VitestExecutor.directRequest (${cwd.href}/node_modules/vite-node/dist/client.mjs:381:5)
      at VitestExecutor.cachedRequest (${cwd.href}/node_modules/vite-node/dist/client.mjs:206:14)
      at VitestExecutor.executeId (${cwd.href}/node_modules/vite-node/dist/client.mjs:173:12)
`

export default error
