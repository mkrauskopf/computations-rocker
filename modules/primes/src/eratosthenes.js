// Naive bounded implementation with an upper limit. Not a pure generator.
function* boundedGenerator(target) {
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

// Infinite generator. See: https://benmccormick.org/2017/11/28/sieveoferatosthenes/
function* infiniteGenerator() {
  const markedNotPrime = {}
  let valueToCheck = 2
  while (true) {
    if (!(valueToCheck in markedNotPrime)) {
      yield valueToCheck
      markedNotPrime[valueToCheck ** 2] = [valueToCheck]
    } else {
      const primes = markedNotPrime[valueToCheck]
      primes.forEach((prime) => {
        const nextMultipleOfPrime = prime + valueToCheck
        if (nextMultipleOfPrime in markedNotPrime) {
          markedNotPrime[nextMultipleOfPrime].push(prime)
        } else {
          markedNotPrime[nextMultipleOfPrime] = [prime]
        }
      })
      delete markedNotPrime[valueToCheck]
    }
    valueToCheck += 1
  }
}

export { boundedGenerator, infiniteGenerator }
