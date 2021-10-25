/*
 * @lc app=leetcode id=661 lang=typescript
 *
 * [661] Image Smoother
 */

// @lc code=start
function imageSmoother(img: number[][]): number[][] {
  const [m, n] = [img.length, img[0].length]

  const smoother = (x: number, y: number) => {
    let sum = 0
    let count = 0

    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, m); i++) {
      for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, n); j++) {
        sum += img[i][j]
        count++
      }
    }

    return ~~(sum / count)
  }

  let r = []

  for (let i = 0; i < img.length; i++) {
    const row = img[i]
    r[i] = []

    for (let j = 0; j < row.length; j++) {
      r[i][j] = smoother(i, j)
    }
  }

  return r
}
// @lc code=end

describe('image smoother', () => {
  test('img = [[1,1,1],[1,0,1],[1,1,1]]', () => {
    expect(
      imageSmoother([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  })

  test('img = [[100,200,100],[200,50,200],[100,200,100]]', () => {
    expect(
      imageSmoother([
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100],
      ])
    ).toEqual([
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ])
  })
})
