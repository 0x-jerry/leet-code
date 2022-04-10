/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map((n) => n * n)
}
// @lc code=end

describe('sorted squares', () => {
  it('nums = [-4,-1,0,3,10]', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
  })

  it('nums = [-7,-3,2,3,11]', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
  })
})
