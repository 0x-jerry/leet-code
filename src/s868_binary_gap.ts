/*
 * @lc app=leetcode id=868 lang=typescript
 *
 * [868] Binary Gap
 */

// @lc code=start
function binaryGap(n: number): number {
  const binaryRepresentation = n.toString(2).split('')

  let idx = -1
  let maxDistance = 0
  for (let i = 0; i < binaryRepresentation.length; i++) {
    const char = binaryRepresentation[i]
    if (char === '1') {
      if (idx !== -1) {
        const dis = i - idx
        maxDistance = Math.max(maxDistance, dis)
      }

      idx = i
    }
  }

  return maxDistance
}
// @lc code=end

describe('binaryGap', () => {
  it('n = 22', () => {
    expect(binaryGap(22)).toBe(2)
  })

  it('n = 8', () => {
    expect(binaryGap(8)).toBe(0)
  })

  it('n = 5', () => {
    expect(binaryGap(5)).toBe(2)
  })
})
