import { primeGenerator } from '../eratosthenes'

describe('eratosthenes sieve', () => {
  it('should computes primes', () => {
    const sieve = primeGenerator(10)
    expect(sieve.next().value).toBe(2)
    expect(sieve.next().value).toBe(3)
    expect(sieve.next().value).toBe(5)
    expect(sieve.next().value).toBe(7)
    expect(sieve.next().done).toBe(true)
  })
})
