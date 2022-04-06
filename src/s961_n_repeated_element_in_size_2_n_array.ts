/*
 * @lc app=leetcode id=961 lang=typescript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  const visited = new Set<number>()

  for (const num of nums) {
    if (visited.has(num)) {
      return num
    } else {
      visited.add(num)
    }
  }

  return 0
}
// @lc code=end

describe('repeated n times', () => {
  it('nums = [1,2,3,3]', () => {
    expect(repeatedNTimes([1, 2, 3, 3])).toBe(3)
  })

  it('nums = [2,1,2,5,3,2]', () => {
    expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2)
  })

  it('nums = [5,1,5,2,5,3,5,4]', () => {
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5)
  })
})
