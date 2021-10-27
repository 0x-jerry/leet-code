/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  let lIdx = 0
  let rIdx = s.length - 1

  while (lIdx < rIdx) {
    if (s[lIdx] !== s[rIdx]) {
      return isPalindrome(s.slice(lIdx + 1, rIdx + 1)) || isPalindrome(s.slice(lIdx, rIdx))
    }

    lIdx++
    rIdx--
  }

  return true
}

function isPalindrome(s: string) {
  if (!s) return false

  let lIdx = 0
  let rIdx = s.length - 1

  while (lIdx < rIdx) {
    if (s[lIdx] !== s[rIdx]) {
      return false
    }

    lIdx++
    rIdx--
  }

  return true
}

// @lc code=end

describe('valid palind rome', () => {
  test('s = "aba"', () => {
    expect(validPalindrome('aba')).toBe(true)
  })

  test('s = "abca"', () => {
    expect(validPalindrome('abca')).toBe(true)
  })

  test('s = "abc"', () => {
    expect(validPalindrome('abc')).toBe(false)
  })

  test('s = "eeccccbebaeeabebccceea"', () => {
    expect(validPalindrome('eeccccbebaeeabebccceea')).toBe(false)
  })

  test('s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"', () => {
    expect(
      validPalindrome(
        'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga'
      )
    ).toBe(true)
  })
})
