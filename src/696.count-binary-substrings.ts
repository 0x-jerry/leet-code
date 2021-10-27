/*
 * @lc app=leetcode id=696 lang=typescript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
function countBinarySubstrings(s: string): number {
  let all = 0

  let c = s[0]
  const flip = () => (c === '0' ? '1' : '0')

  let count = countChar(0, c)
  let i = count

  while (i < s.length) {
    const nextC = flip()
    const nextCount = countChar(i, nextC)

    if (nextCount >= count) {
      all += count
    } else {
      all += nextCount
    }

    i += nextCount

    count = nextCount
    c = nextC
  }

  function countChar(start: number, char: string) {
    let count = 0

    for (let i = start; i < s.length; i++) {
      if (s[i] === char) count++
      else return count
    }

    return count
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
