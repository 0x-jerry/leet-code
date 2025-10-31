/*
 * @lc app=leetcode id=216 lang=typescript
 *
 * [216] Combination Sum III
 */

// @lc code=start
const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function combinationSum3(k: number, n: number): number[][] {
  const nums = allNums.slice(0, n)

  return combinationSum(k, n, nums)

  function combinationSum(k: number, n: number, nums: number[]): number[][] {
    const min = nums.slice(0, k).reduce((pre, cur) => pre + cur, 0)
    const max = nums.slice(-k).reduce((pre, cur) => pre + cur, 0)

    if (n < min || n > max) return []

    if (k === 1) {
      return [nums.filter((x) => x === n)]
    }

    return nums
      .slice(k - 1)
      .filter((x) => x < n)
      .flatMap((x) => {
        const total = n - x
        if (total < 0) {
          return []
        }

        const r = combinationSum(k - 1, total, nums.slice(0, x - 1))

        return r.map((arr) => [...arr, x])
      })
  }
}
// @lc code=end

describe('Combination Sum III', () => {
  it('k = 3, n = 7', () => {
    expect(combinationSum3(3, 7)).eql([[1, 2, 4]])
  })

  it('k = 3, n = 9', () => {
    expect(combinationSum3(3, 9)).eql([
      [2, 3, 4],
      [1, 3, 5],
      [1, 2, 6],
    ])
  })

  it('k = 1, n = 1', () => {
    expect(combinationSum3(4, 1)).eql([])
  })
})
