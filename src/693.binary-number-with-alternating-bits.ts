/*
 * @lc app=leetcode id=693 lang=typescript
 *
 * [693] Binary Number with Alternating Bits
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
  let flip = n % 2
  n = ~~(n / 2)

  while (n > 0) {
    const x = n % 2
    if (flip === x) {
      return false
    } else {
      flip = x
    }

    n = ~~(n / 2)
  }

  return true
}
// @lc code=end

describe('has alternating bits', () => {
  test('n = 5', () => {
    expect(hasAlternatingBits(5)).toBe(true)
  })

  test('n = 7', () => {
    expect(hasAlternatingBits(7)).toBe(false)
  })

  test('n = 11', () => {
    expect(hasAlternatingBits(11)).toBe(false)
  })

  test('n = 10', () => {
    expect(hasAlternatingBits(10)).toBe(true)
  })

  test('n = 3', () => {
    expect(hasAlternatingBits(3)).toBe(false)
  })
})
