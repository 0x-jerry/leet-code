/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
  const counter = {
    L: 0,
    U: 0,
  }

  for (const m of moves) {
    if (m === 'D') {
      counter.U--
    } else if (m === 'R') {
      counter.L--
    } else {
      counter[m]++
    }
  }

  return counter.L === 0 && counter.U === 0
}
// @lc code=end

describe('judge circle', () => {
  test('moves = "UD"', () => {
    expect(judgeCircle('UD')).toBe(true)
  })

  test('moves = "LL"', () => {
    expect(judgeCircle('LL')).toBe(false)
  })

  test('moves = "RRDD"', () => {
    expect(judgeCircle('RRDD')).toBe(false)
  })

  test('moves = "LDRRLRUULR"', () => {
    expect(judgeCircle('LDRRLRUULR')).toBe(false)
  })
})
