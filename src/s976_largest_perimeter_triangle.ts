/*
 * @lc app=leetcode id=976 lang=typescript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
  nums = nums.sort((a, b) => b - a)

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i]
    const b = nums[i + 1]
    const c = nums[i + 2]

    // because a > b > c
    // a > b
    // a + c > b + c
    // a + c > b
    // so, we only need to check whether b + c is gt a
    if (b + c > a) {
      return a + b + c
    }
  }

  return 0
}

// @lc code=end

describe('largest perimeter', () => {
  it('nums = [2,1,2]', () => {
    expect(largestPerimeter([2, 1, 2])).toBe(5)
  })

  it('nums = [1,2,1]', () => {
    expect(largestPerimeter([1, 2, 1])).toBe(0)
  })

  it('nums = [1,4,18,3,8,4,4]', () => {
    expect(largestPerimeter([1, 4, 18, 3, 8, 4, 4])).toBe(12)
  })
})
