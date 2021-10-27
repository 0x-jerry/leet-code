/*
 * @lc app=leetcode id=717 lang=typescript
 *
 * [717] 1-bit and 2-bit Characters
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
  let pre = null
  for (const bit of bits) {
    if (pre === 1) {
      pre = null
    } else {
      pre = bit
    }
  }

  return pre === 0
}
// @lc code=end

describe('is one bit character', () => {
  test('bits = [1,0,0]', () => {
    expect(isOneBitCharacter([1, 0, 0])).toBe(true)
  })

  test('bits = [1,1,1,0]', () => {
    expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false)
  })
})
