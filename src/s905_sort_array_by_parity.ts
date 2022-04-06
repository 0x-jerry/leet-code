/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  const r: number[] = []
  for (const num of nums) {
    if (num % 2 === 0) {
      r.unshift(num)
    } else {
      r.push(num)
    }
  }

  return r
}
// @lc code=end

describe('sort array by parity', () => {
  it('nums = [3,1,2,4]', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 3, 1])
  })

  it('nums = [0]', () => {
    expect(sortArrayByParity([0])).toEqual([0])
  })
})
