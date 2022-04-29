/*
 * @lc app=leetcode id=1030 lang=typescript
 *
 * [1030] Matrix Cells in Distance Order
 */

// @lc code=start
function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const distance: number[][][] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const dis = Math.abs(i - rCenter) + Math.abs(j - cCenter)
      distance[dis] ||= []
      distance[dis].push([i, j])
    }
  }

  return distance.filter(Boolean).flat()
}
// @lc code=end

describe('all cells dist order', () => {
  it('rows = 1, cols = 2, rCenter = 0, cCenter = 0', () => {
    expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
      [0, 0],
      [0, 1],
    ])
  })

  it('rows = 2, cols = 2, rCenter = 0, cCenter = 1', () => {
    expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
      [0, 1],
      [0, 0],
      [1, 1],
      [1, 0],
    ])
  })

  it('rows = 2, cols = 3, rCenter = 1, cCenter = 2', () => {
    expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
      [1, 2],
      [0, 2],
      [1, 1],
      [0, 1],
      [1, 0],
      [0, 0],
    ])
  })
})
