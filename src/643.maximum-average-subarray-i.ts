/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let preSum = 0
  let max = -Infinity

  for (let idx = 0; idx < k; idx++) {
    preSum += nums[idx]
  }

  max = Math.max(preSum, max)

  for (let idx = k; idx < nums.length; idx++) {
    preSum += nums[idx] - nums[idx - k]
    max = Math.max(preSum, max)
  }

  return max / k
}
// @lc code=end

describe('find max average', () => {
  test('nums = [1,12,-5,-6,50,3], k = 4', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75)
  })

  test('nums = [5], k = 1', () => {
    expect(findMaxAverage([5], 1)).toBe(5.0)
  })

  test('nums = [-1], k = 1', () => {
    expect(findMaxAverage([-1], 1)).toBe(-1.0)
  })
})
