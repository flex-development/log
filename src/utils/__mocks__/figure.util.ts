/**
 * @file User Module Mock - figure
 * @module utils/mocks/figure
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../figure.util').default(...args)
})
