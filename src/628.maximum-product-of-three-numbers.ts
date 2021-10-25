/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  const max = [-Infinity, -Infinity, -Infinity]
  const min = [Infinity, Infinity, Infinity]

  for (const n of nums) {
    if (n > max[2]) {
      max[0] = max[1]
      max[1] = max[2]
      max[2] = n
    } else if (n > max[1]) {
      max[0] = max[1]
      max[1] = n
    } else if (n > max[0]) {
      max[0] = n
    }
    //

    if (n < min[2]) {
      min[0] = min[1]
      min[1] = min[2]
      min[2] = n
    } else if (n < min[1]) {
      min[0] = min[1]
      min[1] = n
    } else if (n < min[0]) {
      min[0] = n
    }
  }

  return Math.max(max[0] * max[1] * max[2], max[2] * min[1] * min[2])
}
// @lc code=end

describe('maximum product', () => {
  test('nums = [1,2,3]', () => {
    expect(maximumProduct([1, 2, 3])).toBe(6)
  })

  test('nums = [1,2,3,4]', () => {
    expect(maximumProduct([1, 2, 3, 4])).toBe(24)
  })

  test('nums = [-1,-2,-3]', () => {
    expect(maximumProduct([-1, -2, -3])).toBe(-6)
  })

  test('nums = [-100,-98,-1,2,3,4]', () => {
    expect(maximumProduct([-100, -98, -1, 2, 3, 4])).toBe(39200)
  })
})
