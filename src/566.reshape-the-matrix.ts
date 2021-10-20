/*
 * @lc app=leetcode id=566 lang=typescript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
function matrixReshape(mat: number[][], row: number, col: number): number[][] {
  if (!mat.length) return mat

  const m = mat.length
  const n = mat[0].length

  if (m * n !== row * col) return mat

  const newMat = []

  for (let idx = 0; idx < row; idx++) {
    newMat.push(getRange(idx * col, col))
  }

  return newMat

  function getRange(start: number, len: number) {
    const range = []
    const i = ~~(start / n)
    const j = start % n

    for (let idx = i; idx < m; idx++) {
      const el = mat[idx]
      if (idx === i) {
        range.push(...el.slice(j, j + len))
      } else {
        range.push(...el.slice(0, len))
      }

      len = col - range.length
      if (len === 0) {
        break
      }
    }

    return range
  }
}

// @lc code=end

describe('matrix reshape', () => {
  test('mat = [[1,2],[3,4]], r = 1, c = 4', () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4],
        ],
        1,
        4
      )
    ).toEqual([[1, 2, 3, 4]])
  })

  test('mat = [[1,2],[3,4]], r = 2, c = 4', () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4],
        ],
        2,
        4
      )
    ).toEqual([
      [1, 2],
      [3, 4],
    ])
  })

  test('mat = [[1,2],[3,4]], r = 4, c = 1', () => {
    expect(
      matrixReshape(
        [
          [1, 2],
          [3, 4],
        ],
        4,
        1
      )
    ).toEqual([[1], [2], [3], [4]])
  })

  test('mat = [[1],[2],[3],[4]], r = 1, c = 4', () => {
    expect(matrixReshape([[1], [2], [3], [4]], 1, 4)).toEqual([[1, 2, 3, 4]])
  })
})
