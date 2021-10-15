/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split('')
      .reduce((s, c) => (c === '1' ? s + 0 : s + 1), ''),
    2
  )
}
// @lc code=end

describe('find complement', () => {
  test('5', () => {
    expect(findComplement(5)).toBe(2)
  })

  test('1', () => {
    expect(findComplement(1)).toBe(0)
  })
})
