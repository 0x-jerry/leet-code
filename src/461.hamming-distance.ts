/*
 * @lc app=leetcode id=461 lang=typescript
 *
 * [461] Hamming Distance
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  let r = x ^ y
  let count = 0

  while (r) {
    r = r & (r - 1)
    count++
  }

  return count++
}
// @lc code=end

describe('hamming distance', () => {
  test('1, 4', () => {
    expect(hammingDistance(1, 4)).toBe(2)
  })
})
