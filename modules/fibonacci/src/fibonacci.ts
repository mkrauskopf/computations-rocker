function naive(n: number): number {
  checkInput(n)
  return n < 2 ? n : naive(n - 1) + naive(n - 2)
}

function checkInput(n: number): void {
  if (n == null) {
    throw new Error(`'n' is not defined: ${n}`)
  }
  if (typeof n !== 'number') {
    throw new Error(`${n} is not a number`)
  }
  if (n < 0) {
    throw new Error('Does not support negative fibonacci numbers.')
  }
}

export { naive }
