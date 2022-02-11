import { boundedGenerator, infiniteGenerator } from '../eratosthenes'

function testGeneratorUpTo10(generator) {
  expect(generator.next().value).toBe(2)
  expect(generator.next().value).toBe(3)
  expect(generator.next().value).toBe(5)
  expect(generator.next().value).toBe(7)
}

describe('eratosthenes sieve', () => {
  describe('naive eratosthenes generator', () => {
    it('should generate primes', () => {
      const gen = boundedGenerator(10)
      testGeneratorUpTo10(gen)
      expect(gen.next().done).toBe(true)
    })
  })

  describe('infinite eratosthenes generator', () => {
    it('should generate primes', () => {
      const gen = infiniteGenerator()
      testGeneratorUpTo10(gen)
      expect(gen.next().done).toBe(false)
    })
  })
})
