/*
 * @lc app=leetcode id=748 lang=typescript
 *
 * [748] Shortest Completing Word
 */

// @lc code=start
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const letters = licensePlate
    .toLowerCase()
    .split('')
    .filter((c) => /[a-z]/i.test(c))

  let shortestWord: string | null = null

  for (const word of words) {
    if (isCompletingWord(letters, word)) {
      if (!shortestWord || word.length < shortestWord.length) {
        shortestWord = word
      }
    }
  }

  return shortestWord
}

function isCompletingWord(letters: string[], word: string): boolean {
  const l = [...letters]
  for (const c of word) {
    const idx = l.findIndex((i) => i === c)
    if (idx >= 0) l.splice(idx, 1)
  }

  return !l.length
}
// @lc code=end

describe('shortest completing word', () => {
  test('licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]', () => {
    expect(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])).toBe('steps')
  })

  test('licensePlate = "1s3 456", words = ["looks","pest","stew","show"]', () => {
    expect(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show'])).toBe('pest')
  })

  test('licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]', () => {
    expect(
      shortestCompletingWord('Ah71752', [
        'suggest',
        'letter',
        'of',
        'husband',
        'easy',
        'education',
        'drug',
        'prevent',
        'writer',
        'old',
      ])
    ).toBe('husband')
  })

  test('licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]', () => {
    expect(
      shortestCompletingWord('OgEu755', [
        'enough',
        'these',
        'play',
        'wide',
        'wonder',
        'box',
        'arrive',
        'money',
        'tax',
        'thus',
      ])
    ).toBe('enough')
  })

  test('licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]', () => {
    expect(
      shortestCompletingWord('iMSlpe4', [
        'claim',
        'consumer',
        'student',
        'camera',
        'public',
        'never',
        'wonder',
        'simple',
        'thought',
        'use',
      ])
    ).toBe('simple')
  })
})
