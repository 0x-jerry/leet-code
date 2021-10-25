/*
 * @lc app=leetcode id=598 lang=typescript
 *
 * [598] Range Addition II
 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
  const min = [m, n]
  for (const [x, y] of ops) {
    min[0] = Math.min(min[0], x)
    min[1] = Math.min(min[1], y)
  }

  return min[0] * min[1]
}
// @lc code=end

describe('max count', () => {
  test('m = 3, n = 3, ops = [[2,2],[3,3]]', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
      ])
    ).toBe(4)
  })

  test('m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
      ])
    ).toBe(4)
  })

  test('m = 3, n = 3, ops = []', () => {
    expect(maxCount(3, 3, [])).toBe(9)
  })
})
