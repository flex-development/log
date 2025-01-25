declare module '#internal/process' {
  const process: NodeJS.Process & { browser?: boolean }
  export default process
}
