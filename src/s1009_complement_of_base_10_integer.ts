/*
 * @lc app=leetcode id=1009 lang=typescript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
function bitwiseComplement(n: number): number {
  let max = 2

  while (max < n) {
    max *= 2
  }

  return ~n & (max - 1)
}
// @lc code=end

describe('bitwise complement', () => {
  it('n = 5', () => {
    expect(bitwiseComplement(5)).toBe(2)
  })

  it('n = 7', () => {
    expect(bitwiseComplement(7)).toBe(0)
  })

  it('n = 10', () => {
    expect(bitwiseComplement(10)).toBe(5)
  })
})
