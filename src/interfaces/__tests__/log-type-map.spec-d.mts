/**
 * @file Type Tests - LogTypeMap
 * @module log/interfaces/tests/unit-d/LogTypeMap
 */

import type TestSubject from '#interfaces/log-type-map'

describe('unit-d:interfaces/LogTypeMap', () => {
  it('should match [debug: "debug"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('debug').toEqualTypeOf<'debug'>()
  })

  it('should match [error: "error"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('error').toEqualTypeOf<'error'>()
  })

  it('should match [fail: "fail"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('fail').toEqualTypeOf<'fail'>()
  })

  it('should match [fatal: "fatal"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('fatal').toEqualTypeOf<'fatal'>()
  })

  it('should match [info: "info"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('info').toEqualTypeOf<'info'>()
  })

  it('should match [log: "log"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('log').toEqualTypeOf<'log'>()
  })

  it('should match [ready: "ready"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('ready').toEqualTypeOf<'ready'>()
  })

  it('should match [start: "start"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('start').toEqualTypeOf<'start'>()
  })

  it('should match [success: "success"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('success')
      .toEqualTypeOf<'success'>()
  })

  it('should match [trace: "trace"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('trace').toEqualTypeOf<'trace'>()
  })

  it('should match [verbose: "verbose"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('verbose')
      .toEqualTypeOf<'verbose'>()
  })

  it('should match [warn: "warn"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('warn').toEqualTypeOf<'warn'>()
  })
})
