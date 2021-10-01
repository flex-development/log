import { ExceptionCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'
import logger from '@flex-development/grease/utils/logger.util'
import LogLevel from '@log/enums/log-level.enum'
import type { ChildProcess } from 'child_process'
import sh from 'shelljs'

/**
 * @file Script Utility - Shell Command Executor
 * @module scripts/utils/exec
 */

/**
 * Executes a shell command or logs the command that would be run.
 *
 * @param {string} command - Command
 * @param {boolean} [dryRun=false] - Log command that would be run
 * @param {sh.ExecOptions} [options={silent:true}] - `sh.exec` options
 * @return {string | void} Command output, command, or nothing
 * @throws {Exception}
 */
const exec = (
  command: string,
  dryRun: boolean = false,
  options: sh.ExecOptions = {}
): string => {
  // Format command
  command = command.trim()

  // Set default options
  if (options.silent === undefined) options.silent = true

  // Command output
  let stdout: ChildProcess | sh.ShellString | null = null

  // Log command during dry runs, otherwise execute command
  if (dryRun) logger({}, command, [], LogLevel.WARN)
  else stdout = sh.exec(command, options) as sh.ShellString | null

  // Throw Exception if error executing command
  if (stdout && stdout.code !== 0) {
    const code = ExceptionCode.INTERNAL_SERVER_ERROR

    throw new Exception(code, undefined, {
      code: stdout.code,
      message: (stdout.stderr || stdout.stdout).toString()
    })
  }

  // Format command output
  if (stdout && stdout.length > 0) return stdout.toString().replaceAll('\n', '')

  return command
}

export default exec
