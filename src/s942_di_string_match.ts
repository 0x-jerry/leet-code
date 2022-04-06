/*
 * @lc app=leetcode id=942 lang=typescript
 *
 * [942] DI String Match
 */

// @lc code=start
function diStringMatch(s: string): number[] {
  let max = s.length
  let min = 0

  const r: number[] = []

  for (let idx = 0; idx < s.length; idx++) {
    const c = s[idx]
    if (c === 'I') {
      r.push(min++)
    } else {
      r.push(max--)
    }
  }

  r.push(min)

  return r
}
// @lc code=end

describe('DI string match', () => {
  it('s = "IDID"', () => {
    expect(diStringMatch('IDID')).toEqual([0, 4, 1, 3, 2])
  })

  it('s = "III"', () => {
    expect(diStringMatch('III')).toEqual([0, 1, 2, 3])
  })

  it('s = "DDI"', () => {
    expect(diStringMatch('DDI')).toEqual([3, 2, 0, 1])
  })
})
