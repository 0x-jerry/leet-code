/*
 * @lc app=leetcode id=2640 lang=typescript
 *
 * [2640] Find the Score of All Prefixes of an Array
 */

// @lc code=start
function findPrefixScore(nums: number[]): number[] {
  const scores = new Array(nums.length).fill(0)

  let sum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    max = Math.max(max, num)

    const conversion = num + max
    sum += conversion

    scores[i] = sum
  }

  return scores
}
// @lc code=end

describe('Find the Score of All Prefixes of an Array', () => {
  it('[2,3,7,5,10]', () => {
    expect(findPrefixScore([2, 3, 7, 5, 10])).eql([4, 10, 24, 36, 56])
  })

  it('[1,1,2,4,8,16]', () => {
    expect(findPrefixScore([1, 1, 2, 4, 8, 16])).eql([2, 4, 8, 16, 32, 64])
  })
})
