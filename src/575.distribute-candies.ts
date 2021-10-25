/*
 * @lc app=leetcode id=575 lang=typescript
 *
 * [575] Distribute Candies
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
  const types = new Set<number>()

  for (const type of candyType) {
    types.add(type)
  }

  return Math.min(types.size, candyType.length / 2)
}
// @lc code=end

describe('distribute candies', () => {
  test('candyType = [1,1,2,2,3,3]', () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3)
  })

  test('candyType = [1,1,2,3]', () => {
    expect(distributeCandies([1, 1, 2, 3])).toBe(2)
  })

  test('candyType = [6,6,6,6]', () => {
    expect(distributeCandies([6, 6, 6, 6])).toBe(1)
  })
})
