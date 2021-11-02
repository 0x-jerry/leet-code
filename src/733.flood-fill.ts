/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const colorX = image[sr][sc]

  const fillDir = (x: number, y: number) => {
    if (!fill(x, y)) return

    fillDir(x, y - 1)
    fillDir(x, y + 1)
    fillDir(x - 1, y)
    fillDir(x + 1, y)
  }

  const fill = (x: number, y: number) => {
    const c = image[x]?.[y]
    const needFill = c === colorX && c !== newColor

    if (needFill) image[x][y] = newColor

    return needFill
  }

  fillDir(sr, sc)
  return image
}
// @lc code=end

describe('flood fill', () => {
  test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })

  test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2', () => {
    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ])
  })
})
