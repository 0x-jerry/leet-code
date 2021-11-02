/*
 * @lc app=leetcode id=762 lang=typescript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 */

// @lc code=start
function countPrimeSetBits(left: number, right: number): number {
  let primeCount = 0

  for (let num = left; num <= right; num++) {
    if (isPrime(countSetBits(num))) {
      primeCount++
    }
  }

  return primeCount
}

function countSetBits(num: number): number {
  let c = 0
  while (num >= 1) {
    const x = num % 2
    if (x) c++

    num = Math.floor(num / 2)
  }

  return c
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
function isPrime(n: number): boolean {
  return primes.includes(n)
}
// @lc code=end

describe('count prime set bits', () => {
  test('left = 6, right = 10', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4)
  })

  test('left = 10, right = 15', () => {
    expect(countPrimeSetBits(10, 15)).toBe(5)
  })
})
