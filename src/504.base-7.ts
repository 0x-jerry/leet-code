/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
  if (num === 0) return '0'

  const op = num < 0 ? '-' : ''
  let base7 = ''

  num = Math.abs(num)

  while (num > 0) {
    base7 = (num % 7).toString() + base7
    num = ~~(num / 7)
  }

  return op + base7
}
// @lc code=end

describe('covert to base 7', () => {
  test('100', () => {
    expect(convertToBase7(100)).toBe('202')
  })

  test('-7', () => {
    expect(convertToBase7(-7)).toBe('-10')
  })

  test('0', () => {
    expect(convertToBase7(0)).toBe('0')
  })
})
