/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  let mid = ~~((l + r) / 2)
  let idx = mid

  while (l <= r) {
    if (nums[idx] === target) {
      return idx
    } else if (nums[idx] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }

    mid = ~~((l + r) / 2)
    idx = mid
  }

  return -1
}
// @lc code=end

describe('search', () => {
  test('nums = [-1,0,3,5,9,12], target = 9', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })

  test('nums = [-1,0,3,5,9,12], target = 2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })

  test('nums = [5], target = 5', () => {
    expect(search([5], 5)).toBe(0)
  })

  test('nums = [-1,0,3,5,9,12], target = 12', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5)
  })
})
