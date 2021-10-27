/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(ops: string[]): number {
  const sum: number[] = []

  for (const op of ops) {
    if (op === 'D') {
      sum.push(sum[sum.length - 1] * 2)
    } else if (op === 'C') {
      sum.splice(-1)
    } else if (op === '+') {
      sum.push(sum[sum.length - 2] + sum[sum.length - 1])
    } else {
      const v = parseInt(op)
      sum.push(v)
    }
  }

  return sum.reduce((pre, cur) => pre + cur, 0)
}
// @lc code=end

describe('cal points', () => {
  test('ops = ["5","2","C","D","+"]', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30)
  })

  test('ops = ["5","-2","4","C","D","9","+","+"]', () => {
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
  })

  test('ops = ["1"]', () => {
    expect(calPoints(['1'])).toBe(1)
  })
})
