/*
 * @lc app=leetcode id=1051 lang=typescript
 *
 * [1051] Height Checker
 */

// @lc code=start
function heightChecker(heights: number[]): number {
  const clone = [...heights]

  return clone
    .sort((a, b) => a - b)
    .reduce((count, cur, idx) => {
      return cur === heights[idx] ? count : count + 1
    }, 0)
}
// @lc code=end

describe('height checker', () => {
  it('[1,1,4,2,1,3]', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3)
  })

  it('[5,1,2,3,4]', () => {
    expect(heightChecker([5, 1, 2, 3, 4])).toBe(5)
  })

  it('[1,2,3,4,5]', () => {
    expect(heightChecker([1, 2, 3, 4, 5])).toBe(0)
  })

  it('[10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]', () => {
    expect(heightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7])).toBe(22)
  })
})
