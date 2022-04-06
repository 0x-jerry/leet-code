/*
 * @lc app=leetcode id=908 lang=typescript
 *
 * [908] Smallest Range I
 */

// @lc code=start
function smallestRangeI(nums: number[], k: number): number {
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    const v1 = nums[i]
    min = Math.min(v1, min)
    max = Math.max(v1, max)
  }

  return Math.max(0, Math.abs(max - min) - 2 * k)
}
// @lc code=end

describe('smallest range 1', () => {
  it('nums = [1], k = 0', () => {
    expect(smallestRangeI([1], 0)).toBe(0)
  })

  it('nums = [0,10], k = 2', () => {
    expect(smallestRangeI([0, 10], 2)).toBe(6)
  })

  it('nums = [1,3,6], k = 3', () => {
    expect(smallestRangeI([1, 3, 6], 3)).toBe(0)
  })

  it('nums = [2,7,2], k = 1', () => {
    expect(smallestRangeI([2, 7, 2], 1)).toBe(3)
  })
})
