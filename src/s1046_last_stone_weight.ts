/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
  const compare = (a: number, b: number) => b - a

  while (stones.length > 1) {
    const [y, x, ...other] = stones.sort(compare)
    const rest = y - x

    if (rest > 0) {
      other.push(rest)
    }

    stones = other
  }

  return stones.at(0) || 0
}
// @lc code=end

describe('last stone weight', () => {
  it('stones = [2,7,4,1,8,1]', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1)
  })

  it('stones = [1]', () => {
    expect(lastStoneWeight([1])).toBe(1)
  })
})
