/**
 * @file Type Tests - LogLevelMap
 * @module log/interfaces/tests/unit-d/LogLevelMap
 */

import type TestSubject from '#interfaces/log-level-map'

describe('unit-d:interfaces/LogLevelMap', () => {
  it('should match [debug: 4]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('debug').toEqualTypeOf<4>()
  })

  it('should match [error: 0]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('error').toEqualTypeOf<0>()
  })

  it('should match [info: 3]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('info').toEqualTypeOf<3>()
  })

  it('should match [log: 2]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('log').toEqualTypeOf<2>()
  })

  it('should match [silent: -1]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('silent').toEqualTypeOf<-1>()
  })

  it('should match [trace: 5]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('trace').toEqualTypeOf<5>()
  })

  it('should match [verbose: 999]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('verbose').toEqualTypeOf<999>()
  })

  it('should match [warn: 1]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('warn').toEqualTypeOf<1>()
  })
})
