import ansi from 'ansi-styles'

/**
 * @file Node Module Mock - chalk
 * @module mocks/chalk
 * @see https://jestjs.io/docs/manual-mocks#mocking-node-modules
 * @see https://github.com/chalk/chalk
 */

const chalk = jest.requireActual('chalk')
const colors = Object.keys(ansi.bgColor).concat(Object.keys(ansi.color))

const mock = {
  bold: jest.fn((...args) => chalk.bold(...args)),
  dim: jest.fn((...args) => chalk.dim(...args))
}

colors.forEach(c => (mock[c] = jest.fn((...args) => chalk[c](...args))))
colors.forEach(key => (mock['bold'][key] = mock[key]))

export default mock
