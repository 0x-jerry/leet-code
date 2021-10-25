/*
 * @lc app=leetcode id=594 lang=typescript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
function findLHS(nums: number[]): number {
  const count = new Map<number, number>()

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1)
  }

  let max = 0

  count.forEach((v, key) => {
    const next = count.get(key + 1)
    if (next) {
      max = Math.max(max, next + v)
    }
  })

  return max
}
// @lc code=end

describe('find LHS', () => {
  test('nums = [1,3,2,2,5,2,3,7]', () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5)
  })

  test('nums = [1,2,3,4]', () => {
    expect(findLHS([1, 2, 3, 4])).toBe(2)
  })

  test('nums = [1,1,1,1]', () => {
    expect(findLHS([1, 1, 1, 1])).toBe(0)
  })
})
