/*
 * @lc app=leetcode id=521 lang=typescript
 *
 * [521] Longest Uncommon Subsequence I
 */

// @lc code=start
function findLUSlength(a: string, b: string): number {
  if (a.length !== b.length) {
    return Math.max(a.length, b.length)
  }

  const isSubsequence = (sub: string, all: string) => {
    let subIdx = 0

    for (let idx = 0; idx < all.length; idx++) {
      const c = all[idx]
      const cur = sub[subIdx]
      if (!cur) {
        break
      }
      if (c === cur) {
        subIdx++
      }
    }

    return subIdx === sub.length
  }

  for (let len = a.length; len > 0; len--) {
    for (let idx = 0; idx <= a.length - len; idx++) {
      const sub = a.slice(idx, len)
      const isUncommonSubsequence = !isSubsequence(sub, b)
      if (isUncommonSubsequence) {
        return sub.length
      }
    }
  }

  return -1
  //
}

// @lc code=end

describe('find Longest Uncommon Subsequence length', () => {
  test('a = "aba", b = "cdc"', () => {
    expect(findLUSlength('aba', 'cdc')).toBe(3)
  })

  test('a = "aaa", b = "bbb"', () => {
    expect(findLUSlength('aaa', 'bbb')).toBe(3)
  })

  test('a = "aaa", b = "aaa"', () => {
    expect(findLUSlength('aaa', 'aaa')).toBe(-1)
  })

  test('a = "aefawfawfawfaw", b = "aefawfeawfwafwaef"', () => {
    expect(findLUSlength('aefawfawfawfaw', 'aefawfeawfwafwaef')).toBe(17)
  })
})
