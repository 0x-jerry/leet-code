/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
  if (num < 3) return false

  const divisors = new Set<number>()

  const mid = ~~Math.sqrt(num)

  for (let idx = 1; idx <= mid; idx++) {
    if (num % idx === 0) {
      divisors.add(idx)
      const v = num / idx

      if (v !== num) {
        divisors.add(v)
      }
    }
  }

  const sum = [...divisors].reduce((pre, n) => n + pre, 0)

  return sum === num
}
// @lc code=end

describe('check perfect number', () => {
  test('6', () => {
    expect(checkPerfectNumber(6)).toBe(true)
  })

  test('496', () => {
    expect(checkPerfectNumber(496)).toBe(true)
  })

  test('8128', () => {
    expect(checkPerfectNumber(8128)).toBe(true)
  })

  test('2', () => {
    expect(checkPerfectNumber(2)).toBe(false)
  })
})
