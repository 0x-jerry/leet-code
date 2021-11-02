/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  let lSum = 0
  let rSum = nums.reduce((pre, cur) => pre + cur, 0) - nums[0]
  let idx = 0

  while (idx < nums.length) {
    if (lSum === rSum) return idx
    idx++

    lSum += nums[idx - 1]
    rSum -= nums[idx]
  }

  return -1
}
// @lc code=end

describe('pivot index', () => {
  test('nums = [1,7,3,6,5,6]', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
  })

  test('nums = [1,2,3]', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1)
  })

  test('nums = [2,1,-1]', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0)
  })

  test('nums = [-1,-1,-1,-1,-1,0]', () => {
    expect(pivotIndex([-1, -1, -1, -1, -1, 0])).toBe(2)
  })

  test('nums = [-1,-1,-1,-1,0,1]', () => {
    expect(pivotIndex([-1, -1, -1, -1, 0, 1])).toBe(1)
  })
})
