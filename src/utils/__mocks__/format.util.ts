/**
 * @file User Module Mock - format
 * @module utils/mocks/format
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../format.util').default(...args)
})
