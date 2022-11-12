/*
 * @lc app=leetcode id=2235 lang=typescript
 *
 * [2235] Add Two Integers
 */

// @lc code=start
function sum(num1: number, num2: number): number {
  return num1 + num2
}
// @lc code=end

describe('sum', () => {
  it('num1 = 12, num2 = 5', () => {
    expect(sum(12, 5)).toBe(17)
  })

  it('num1 = -10, num2 = 4', () => {
    expect(sum(-10, 4)).toBe(-6)
  })
})
