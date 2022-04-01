/*
 * @lc app=leetcode id=896 lang=typescript
 *
 * [896] Monotonic Array
 */

// @lc code=start
function isMonotonic(nums: number[]): boolean {
  let offset = 0

  let pre = nums[0]

  for (let idx = 1; idx < nums.length; idx++) {
    const v = nums[idx]
    if (offset === 0) {
      if (v > pre) {
        offset = 1
      } else if (v < pre) {
        offset = -1
      }
    } else {
      if (offset > 0 && v < pre) {
        return false
      } else if (offset < 0 && v > pre) {
        return false
      }
    }

    pre = v
  }

  return true
}
// @lc code=end

describe('is monotonic', () => {
  it('nums = [1,2,2,3]', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true)
  })

  it('nums = [6,5,4,4]', () => {
    expect(isMonotonic([6, 5, 4, 4])).toBe(true)
  })

  it('nums = [1,3,2]', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false)
  })
})
