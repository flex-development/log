/**
 * @file Internal - process
 * @module log/internal/process/browser
 */

export default {
  browser: true,
  cwd: '/',
  env: {},
  stderr: { columns: 80, isTTY: false, write: console.error },
  stdout: { columns: 80, isTTY: false, write: console.log }
}
