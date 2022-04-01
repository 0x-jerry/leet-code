/*
 * @lc app=leetcode id=892 lang=typescript
 *
 * [892] Surface Area of 3D Shapes
 */

// @lc code=start
function surfaceArea(grid: number[][]): number {
  const maxRow = grid.length
  const maxCol = grid[0].length

  const get = (rowIdx: number, colIdx: number) => {
    if (0 <= rowIdx && rowIdx < maxRow && 0 <= colIdx && colIdx < maxCol) {
      return grid[rowIdx][colIdx]
    } else {
      return 0
    }
  }

  const calcArea = (rowIdx: number, colIdx: number) => {
    const v = get(rowIdx, colIdx)

    const t = get(rowIdx - 1, colIdx)

    const b = get(rowIdx + 1, colIdx)

    const l = get(rowIdx, colIdx - 1)

    const r = get(rowIdx, colIdx + 1)

    if (!v) return 0

    return 4 * v + 2 - [t, b, l, r].map((n) => Math.min(n, v)).reduce((pre, c) => pre + c, 0)
  }

  let area = 0

  grid.forEach((row, rowIdx) => {
    row.forEach((value, colIdx) => {
      const v = calcArea(rowIdx, colIdx)
      console.log(value, v)
      area += v
    })
  })

  return area
}
// @lc code=end

describe('surfaceArea', () => {
  it('grid = [[1,2],[3,4]]', () => {
    expect(
      surfaceArea([
        [1, 2],
        [3, 4],
      ])
    ).toBe(34)
  })

  it('grid = [[1,1,1],[1,0,1],[1,1,1]]', () => {
    expect(
      surfaceArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ])
    ).toBe(32)
  })

  it('grid = [[2,2,2],[2,1,2],[2,2,2]]', () => {
    expect(
      surfaceArea([
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2],
      ])
    ).toBe(46)
  })
})
