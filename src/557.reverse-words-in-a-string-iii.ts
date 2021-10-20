/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
  return s.split(/\s/g).map(reverseWord).join(' ')
}

function reverseWord(s: string) {
  let r = ''

  let idx = s.length - 1

  do {
    r += s[idx]
  } while (idx--)

  return r
}
// @lc code=end

describe('reverse words', () => {
  test(`s = "Let's take LeetCode contest"`, () => {
    expect(reverseWords(`Let's take LeetCode contest`)).toBe(`s'teL ekat edoCteeL tsetnoc`)
  })

  test(`s = "God Ding"`, () => {
    expect(reverseWords(`God Ding`)).toBe(`doG gniD`)
  })
})
