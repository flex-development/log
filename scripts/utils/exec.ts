import log from '@flex-development/grease/utils/log.util'
import type { NullishString } from '@flex-development/tutils'
import type { ChildProcess } from 'child_process'
import type { ShellString } from 'shelljs'
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
 * @return {NullishString} Command output or `null`
 */
const exec = (
  command: string,
  dryRun: boolean = false,
  options: sh.ExecOptions = { silent: true }
): NullishString => {
  let stdout: ChildProcess | ShellString | null = null

  command = command.trim()

  if (dryRun) log({}, command, [], 'warning')
  else stdout = sh.exec(command, options)

  return stdout ? stdout.toString().replaceAll('\n', '') : null
}

export default exec
