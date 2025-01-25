/**
 * @file Internal - process
 * @module log/internal/process/browser
 */

import pathe from '@flex-development/pathe'

export default {
  browser: true,
  cwd: pathe.cwd,
  env: {},
  stderr: { columns: 80, isTTY: true, write: console.error },
  stdout: { columns: 80, isTTY: true, write: console.log }
}
