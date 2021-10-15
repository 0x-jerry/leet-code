/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let count = 0

  for (const n of nums) {
    if (n) count++
    else {
      max = Math.max(max, count)
      count = 0
    }
  }

  return Math.max(max, count)
}
// @lc code=end

describe('find max consecutive ones', () => {
  test('[1,1,0,1,1,1]', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3)
  })

  test('[1,0,1,1,0,1]', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2)
  })
})
