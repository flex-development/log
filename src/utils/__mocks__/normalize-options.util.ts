/**
 * @file User Module Mock - normalizeOptions
 * @module utils/mocks/normalizeOptions
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../normalize-options.util').default(...args)
})
