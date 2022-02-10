// naive implementation, not a pure generator (TODO)
function* primeGenerator(target) {
  const sieve = Array(target).fill(true)

  for (let i = 2; i < target; i++) {
    if (sieve[i]) {
      for (let j = i ** 2; j < target; j += i) {
        sieve[j] = false
      }
    }
  }

  for (let i = 2; i < target; i++) {
    if (sieve[i]) {
      yield i
    }
  }
}

export { primeGenerator }
