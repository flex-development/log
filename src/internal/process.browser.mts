/**
 * @file Internal - process
 * @module log/internal/process/browser
 */

export default {
  browser: true,
  cwd: '/',
  env: {},
  stderr: { isTTY: false, write: console.error },
  stdout: { isTTY: false, write: console.log }
}
