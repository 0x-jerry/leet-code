/*
 * @lc app=leetcode id=1411 lang=typescript
 *
 * [1411] Number of Ways to Paint N × 3 Grid
 */

// @lc code=start
function numOfWays(n: number): number {
  const maxValue = 10 ** 9 + 7

  // a -> 3a + 2b
  // b -> 2a + 2b

  let result = [6, 6]
  let p = [...result]
  for (let i = 1; i < n; i++) {
    p = result

    const a = (p[0] * 3 + p[1] * 2) % maxValue
    const b = (p[0] * 2 + p[1] * 2) % maxValue
    result = [a, b]
  }

  return (result[0] + result[1]) % maxValue
}
// @lc code=end

describe('Number of Ways to Paint N × 3 Grid', () => {
  it('n = 1', () => {
    expect(numOfWays(1)).toBe(12)
  })

  it('n = 2', () => {
    expect(numOfWays(2)).toBe(54)
  })

  it('n = 5000', () => {
    expect(numOfWays(5000)).toBe(30228214)
  })
})
