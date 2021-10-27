/*
 * @lc app=leetcode id=696 lang=typescript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
function countBinarySubstrings(s: string): number {
  let all = 0

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    let count = 0

    for (let j = i + 1; j < s.length - count; j++) {
      const cc = s[j]

      if (cc === c) {
        count++
      } else {
        if (!s.slice(j, j + count).includes(c)) {
          all++
        }
        break
      }
    }
  }

  return all
}

// @lc code=end

describe('count binary substrings', () => {
  test('s = "00110011"', () => {
    expect(countBinarySubstrings('00110011')).toBe(6)
  })

  test('s = "10101"', () => {
    expect(countBinarySubstrings('10101')).toBe(4)
  })

  test('s = "01"', () => {
    expect(countBinarySubstrings('01')).toBe(1)
  })

  test('s = "00110"', () => {
    expect(countBinarySubstrings('00110')).toBe(3)
  })

  test('s = "00100"', () => {
    expect(countBinarySubstrings('00100')).toBe(2)
  })
})
