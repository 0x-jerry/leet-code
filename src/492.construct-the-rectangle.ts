/*
 * @lc app=leetcode id=492 lang=typescript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
function constructRectangle(area: number): number[] {
  const mid = ~~Math.sqrt(area)

  for (let n = mid; n > 0; n--) {
    if (area % n === 0) {
      const m = area / n

      return m > n ? [m, n] : [n, m]
    }
  }
}
// @lc code=end

describe('Construct rectangle', () => {
  test('4', () => {
    expect(constructRectangle(4)).toEqual([2, 2])
  })

  test('37', () => {
    expect(constructRectangle(37)).toEqual([37, 1])
  })

  test('122122', () => {
    expect(constructRectangle(122122)).toEqual([427, 286])
  })
})
