/*
 * @lc app=leetcode id=867 lang=typescript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  const transposedMatrix: number[][] = []

  const setTransposedMatrix = (col: number, row: number, value: number) => {
    transposedMatrix[row] ||= []
    transposedMatrix[row][col] = value
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const row = matrix[rowIdx]
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      const value = row[colIdx]
      setTransposedMatrix(rowIdx, colIdx, value)
    }
  }

  return transposedMatrix
}
// @lc code=end

describe('transpose', () => {
  it('matrix = [[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ])
  })

  it('matrix = [[1,2,3],[4,5,6]]', () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })
})
