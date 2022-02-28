/*
 * @lc app=leetcode id=883 lang=typescript
 *
 * [883] Projection Area of 3D Shapes
 */

// @lc code=start
function projectionArea(grid: number[][]): number {
  const n = grid.length
  let area = n * n

  const xz: number[] = []
  const yz: number[] = []

  grid.forEach((row, y) => {
    row.forEach((val, x) => {
      xz[y] = Math.max(val, xz[y] || 0)
      yz[x] = Math.max(val, yz[x] || 0)

      if (val === 0) {
        area--
      }
    })
  })

  const sum = (arr: number[]) => arr.reduce((sum, val) => sum + val, 0)

  return area + sum(xz) + sum(yz)
}
// @lc code=end

describe('projectionArea', () => {
  it('grid = [[1,2],[3,4]]', () => {
    expect(
      projectionArea([
        [1, 2],
        [3, 4],
      ])
    ).toBe(17)
  })

  it('grid = [[2]]', () => {
    expect(projectionArea([[2]])).toBe(5)
  })

  it('grid = [[1,0],[0,2]]', () => {
    expect(
      projectionArea([
        [1, 0],
        [0, 2],
      ])
    ).toBe(8)
  })

  it('grid = [[2,3],[2,4]]', () => {
    expect(
      projectionArea([
        [2, 3],
        [2, 4],
      ])
    ).toBe(17)
  })
})
