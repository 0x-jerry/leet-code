/*
 * @lc app=leetcode id=1005 lang=typescript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  const negatives: number[] = []
  const positives: number[] = []

  let minInteger = Infinity

  nums.forEach((item) => {
    if (item < 0) {
      negatives.push(item)
    } else {
      positives.push(item)

      minInteger = Math.min(minInteger, item)
    }
  })

  negatives.sort((a, b) => a - b)

  for (let idx = 0; idx < negatives.length; idx++) {
    if (k-- > 0) {
      negatives[idx] *= -1
    } else {
      break
    }
  }

  const extraNegative = k % 2 === 1 ? Math.min(minInteger, negatives.at(-1) ?? minInteger) : 0

  return [...negatives, ...positives].reduce((pre, cur) => pre + cur, 0) - extraNegative * 2
}
// @lc code=end

describe('largest sum after k negations', () => {
  it('nums = [4,2,3], k = 1', () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5)
  })

  it('nums = [3,-1,0,2], k = 3', () => {
    expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6)
  })

  it('nums = [2,-3,-1,5,-4], k = 2', () => {
    expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13)
  })

  it('nums = [8,-7,-3,-9,1,9,-6,-9,3], k = 8', () => {
    expect(largestSumAfterKNegations([8, -7, -3, -9, 1, 9, -6, -9, 3], 8)).toBe(53)
  })

  it('nums = [-4,-2,-3], k = 4', () => {
    expect(largestSumAfterKNegations([-4, -2, -3], 4)).toBe(5)
  })

  it('nums = [-8,3,-5,-3,-5,-2], k = 6', () => {
    expect(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6)).toBe(22)
  })
})
