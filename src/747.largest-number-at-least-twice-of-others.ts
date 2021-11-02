/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  if (nums.length === 1) return 0

  let first = 0
  let second = 0
  let maxIdx = 0

  nums.forEach((num, idx) => {
    ;[first, second] = [num, first, second].sort((a, b) => b - a)
    if (first === num) maxIdx = idx
  })

  return first >= second * 2 ? maxIdx : -1
}
// @lc code=end

describe('dominant index', () => {
  test('nums = [3,6,1,0]', () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1)
  })

  test('nums = [1,2,3,4]', () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1)
  })

  test('nums = [1]', () => {
    expect(dominantIndex([1])).toBe(0)
  })
})
