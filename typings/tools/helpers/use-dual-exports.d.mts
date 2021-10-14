declare module 'tools/helpers/use-dual-exports.mjs' {
  import type { ReplaceResult } from 'replace-in-file'

  export default function (files?: string | string[]): ReplaceResult[]
}
