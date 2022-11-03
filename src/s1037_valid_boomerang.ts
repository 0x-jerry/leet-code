/*
 * @lc app=leetcode id=1037 lang=typescript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
  if (
    isTheSamePoint(points[0], points[1]) ||
    isTheSamePoint(points[1], points[2]) ||
    isTheSamePoint(points[0], points[2])
  )
    return false

  return calSlope(points[0], points[1]) !== calSlope(points[0], points[2])
}

function calSlope([x1, y1]: number[], [x2, y2]: number[]) {
  if (y2 - y1 === 0) return false

  return (x2 - x1) / (y2 - y1)
}

function isTheSamePoint(p1: number[], p2: number[]) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}
// @lc code=end

describe('is boomerang', () => {
  it('points = [[1,1],[2,3],[3,2]]', () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 3],
        [3, 2],
      ])
    ).toBe(true)
  })

  it('points = [[1,1],[2,3],[3,2]]', () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 2],
        [3, 3],
      ])
    ).toBe(false)
  })

  it('points = [[0,1],[1,1],[2,1]]', () => {
    expect(
      isBoomerang([
        [0, 1],
        [1, 1],
        [2, 1],
      ])
    ).toBe(false)
  })
})
