/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  return nums.map((item) => nums[item])
}
// @lc code=end

describe('build array', () => {
  it('nums = [0,2,1,5,3,4]', () => {
    expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3])
  })
})
