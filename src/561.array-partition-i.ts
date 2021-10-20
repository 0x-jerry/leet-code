/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)

  const mid = nums.length / 2
  let sum = 0
  for (let idx = 0; idx < mid; idx++) {
    sum += nums[idx * 2]
  }

  return sum
}
// @lc code=end

describe('array pair sum', () => {
  test('nums = [1,4,3,2]', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4)
  })

  test('nums = [6,2,6,5,1,2]', () => {
    expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9)
  })
})
