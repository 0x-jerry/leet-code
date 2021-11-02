/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  const reg = new RegExp(`[${jewels}]`, 'g')

  return stones.match(reg)?.length || 0
}
// @lc code=end

describe('num jewels in stones', () => {
  test('jewels = "aA", stones = "aAAbbbb"', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3)
  })

  test('jewels = "z", stones = "ZZ"', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0)
  })
})
