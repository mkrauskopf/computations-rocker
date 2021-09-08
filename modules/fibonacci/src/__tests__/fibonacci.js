import { naive } from '../fibonacci'

describe('fibonacci', () => {
  describe('naive', () => {
    it('should compute properly', () => {
      expect(naive(0)).toBe(0)
      expect(naive(1)).toBe(1)
      expect(naive(8)).toBe(21)
    })

    it('should fail', () => {
      expect(() => naive(null)).toThrowError()
      expect(() => naive(undefined)).toThrowError()
      expect(() => naive('not-a-number')).toThrowError('not-a-number is not a number')
    })
  })
})
