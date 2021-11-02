/*
 * @lc app=leetcode id=804 lang=typescript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start

const morseCodes = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
]

function uniqueMorseRepresentations(words: string[]): number {
  const count = new Set<string>()

  for (const word of words) {
    count.add(transform(word))
  }

  return count.size
}

// @ts-ignore
const a = 'a'.charCodeAt(0)

function transform(word: string): string {
  let r = ''
  for (const c of word) {
    r += morseCodes[c.charCodeAt(0) - a]
  }

  return r
}
// @lc code=end

describe('unique morse representations', () => {
  test('words = ["gin","zen","gig","msg"]', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
  })

  test('words = ["a"]', () => {
    expect(uniqueMorseRepresentations(['a'])).toBe(1)
  })
})
