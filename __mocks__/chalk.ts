import ansi from 'ansi-styles'
import type ch from 'chalk'

/**
 * @file Node Module Mock - chalk
 * @module mocks/chalk
 * @see https://jestjs.io/docs/manual-mocks#mocking-node-modules
 * @see https://github.com/chalk/chalk
 */

type MockChalk = { bold: jest.Mock & MockChalk; dim: jest.Mock } & {
  [K in typeof ch['Color']]: jest.Mock
}

const chalk = jest.requireActual('chalk')
const colors = [...Object.keys(ansi.bgColor), ...Object.keys(ansi.color)]

const mock = {
  bold: jest.fn((...args) => chalk.bold(...args)) as MockChalk['bold'],
  dim: jest.fn((...args) => chalk.dim(...args))
} as MockChalk

for (const color of colors as typeof ch['Color'][]) {
  mock[color] = jest.fn((...args) => chalk[color](...args))
  mock['bold'][color] = mock[color]
}

export default mock
