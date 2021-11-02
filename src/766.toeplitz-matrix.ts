/*
 * @lc app=leetcode id=766 lang=typescript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
  const [m, n] = [matrix.length, matrix[0].length]

  for (let x = 0; x < m; x++) {
    if (!diagonal(x, 0)) return false
  }

  for (let y = 0; y < n; y++) {
    if (!diagonal(0, y)) return false
  }

  function diagonal(x: number, y: number): boolean {
    let first: number = matrix[x][y]
    while (x < m && y < n) {
      if (matrix[x][y] !== first) return false

      x++
      y++
    }

    return true
  }

  return true
}
// @lc code=end

describe('is toeplitz matrix', () => {
  test('matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]', () => {
    expect(
      isToeplitzMatrix([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2],
      ])
    ).toBe(true)
  })

  test('matrix = [[1,2],[2,2]]', () => {
    expect(
      isToeplitzMatrix([
        [1, 2],
        [2, 2],
      ])
    ).toBe(false)
  })
})
