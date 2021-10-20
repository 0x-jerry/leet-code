/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let countA = 0
  let countL = 0

  for (const c of s) {
    if (c === 'A') {
      if (++countA >= 2) {
        return false
      }
    }

    if (c === 'L') {
      if (++countL >= 3) {
        return false
      }
    } else {
      countL = 0
    }
  }

  return true
}
// @lc code=end

describe('check record', () => {
  test('PPALLP', () => {
    expect(checkRecord('PPALLP')).toBe(true)
  })

  test('PPALLL', () => {
    expect(checkRecord('PPALLL')).toBe(false)
  })

  test('AAAA', () => {
    expect(checkRecord('AAAA')).toBe(false)
  })
})
