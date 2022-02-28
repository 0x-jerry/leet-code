/*
 * @lc app=leetcode id=884 lang=typescript
 *
 * [884] Uncommon Words from Two Sentences
 */

// @lc code=start
function uncommonFromSentences(s1: string, s2: string): string[] {
  const w1 = s1.split(' ')
  const w2 = s2.split(' ')

  const counter = new Map<string, { value: string; count: number; isCommon: boolean }>()

  for (const word of w1) {
    if (counter.has(word)) {
      const v = counter.get(word)
      v.isCommon = true
      v.count++
    } else {
      counter.set(word, {
        value: word,
        count: 1,
        isCommon: false,
      })
    }
  }

  for (const word of w2) {
    if (counter.has(word)) {
      const v = counter.get(word)
      v.isCommon = true
      v.count++
    } else {
      counter.set(word, {
        value: word,
        count: 1,
        isCommon: false,
      })
    }
  }

  const difference: string[] = []

  for (const v of counter.values()) {
    if (!v.isCommon && v.count === 1) {
      difference.push(v.value)
    }
  }

  return difference
}
// @lc code=end

describe('uncommonFromSentences', () => {
  it('s1 = "this apple is sweet", s2 = "this apple is sour"', () => {
    expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toEqual(['sweet', 'sour'])
  })

  it('s1 = "apple apple", s2 = "banana"', () => {
    expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana'])
  })
})
