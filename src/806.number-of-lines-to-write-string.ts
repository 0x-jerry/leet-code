/*
 * @lc app=leetcode id=806 lang=typescript
 *
 * [806] Number of Lines To Write String
 */

// @lc code=start
// @ts-ignore
const a = 'a'.charCodeAt(0)

function numberOfLines(widths: number[], s: string): number[] {
  let lineWidth = 0
  let lines = 1

  for (const c of s) {
    const w = letterWidth(c)

    if (lineWidth + w > 100) {
      lineWidth = w
      lines++
    } else {
      lineWidth += w
    }
  }

  return [lines, lineWidth]

  function letterWidth(c: string) {
    return widths[c.charCodeAt(0) - a]
  }
}

// @lc code=end

describe('number of lines', () => {
  test('widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(
      numberOfLines(
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        'abcdefghijklmnopqrstuvwxyz'
      )
    ).toEqual([3, 60])
  })

  test('widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"', () => {
    expect(
      numberOfLines(
        [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        'bbbcccdddaaa'
      )
    ).toEqual([2, 4])
  })
})
