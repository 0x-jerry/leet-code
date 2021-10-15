/*
 * @lc app=leetcode id=500 lang=typescript
 *
 * [500] Keyboard Row
 */

// @lc code=start
function findWords(words: string[]): string[] {
  const find = []
  const keyboards = [
    {
      s: 'qwertyuiop',
      r: /^[qwertyuiop]+$/i,
    },
    {
      s: 'asdfghjkl',
      r: /^[asdfghjkl]+$/i,
    },
    {
      s: 'zxcvbnm',
      r: /^[zxcvbnm]+$/i,
    },
  ]

  for (const word of words) {
    const keys = keyboards.find((s) => s.s.includes(word[0].toLocaleLowerCase()))

    if (keys.r.test(word)) {
      find.push(word)
    }
  }

  return find
}
// @lc code=end

describe('find words', () => {
  test('["Hello","Alaska","Dad","Peace"]', () => {
    expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual(['Alaska', 'Dad'])
  })

  test('["omk"]', () => {
    expect(findWords(['omk'])).toEqual([])
  })

  test('["adsdf","sfd"]', () => {
    expect(findWords(['adsdf', 'sfd'])).toEqual(['adsdf', 'sfd'])
  })
})
