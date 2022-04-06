/*
 * @lc app=leetcode id=922 lang=typescript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
function sortArrayByParityII(nums: number[]): number[] {
  const result: number[] = []
  let oddIdx = 1
  let evenIdx = 0

  nums.forEach((num) => {
    if (num % 2 === 0) {
      result[evenIdx] = num
      evenIdx += 2
    } else {
      result[oddIdx] = num
      oddIdx += 2
    }
  })

  return result
}
// @lc code=end

describe('sort array by parity 2', () => {
  it('nums = [4,2,5,7]', () => {
    expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7])
  })

  it('nums = [2,3]', () => {
    expect(sortArrayByParityII([2, 3])).toEqual([2, 3])
  })
})
