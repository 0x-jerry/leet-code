/*
 * @lc app=leetcode id=1002 lang=typescript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  const charCounter = new Map<string, number[]>()

  words.forEach((word, idx) => {
    for (const c of word) {
      if (!charCounter.has(c)) {
        charCounter.set(c, [])
      }

      const v = charCounter.get(c)

      v[idx] = (v[idx] || 0) + 1
    }
  })

  const commons: string[] = []
  for (const [c, counts] of charCounter.entries()) {
    let min = -1

    for (let idx = 0; idx < words.length; idx++) {
      const count = counts[idx]

      if (!count) {
        min = 0
        break
      }

      min = min === -1 ? count : Math.min(min, count)
    }

    for (let idx = 0; idx < min; idx++) {
      commons.push(c)
    }
  }

  return commons
}
// @lc code=end

describe('common chars', () => {
  it('words = ["bella","label","roller"]', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l'])
  })

  it('words = ["cool","lock","cook"]', () => {
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o'])
  })
})
