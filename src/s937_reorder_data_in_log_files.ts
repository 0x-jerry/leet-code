/*
 * @lc app=leetcode id=937 lang=typescript
 *
 * [937] Reorder Data in Log Files
 */

// @lc code=start
function reorderLogFiles(logs: string[]): string[] {
  const digits: string[] = []
  const words: string[] = []

  const isDigit = (n: string) => {
    return /^[^\s]+[\s\d]+$/.test(n)
  }

  logs.forEach((log) => {
    if (isDigit(log)) {
      digits.push(log)
    } else {
      words.push(log)
    }
  })

  return [
    ...words.sort((a, b) => {
      const [identifierA, ...contentArrA] = a.split(' ')
      const [identifierB, ...contentArrB] = b.split(' ')
      const contentA = contentArrA.join(' ')
      const contentB = contentArrB.join(' ')

      if (contentA === contentB) {
        return identifierA.localeCompare(identifierB)
      } else {
        return contentA.localeCompare(contentB)
      }
    }),
    ...digits,
  ]
}
// @lc code=end

describe('reorder log files', () => {
  it('logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]', () => {
    expect(reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'])).toEqual([
      'let1 art can',
      'let3 art zero',
      'let2 own kit dig',
      'dig1 8 1 5 1',
      'dig2 3 6',
    ])
  })

  it('logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]', () => {
    expect(reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'])).toEqual([
      'g1 act car',
      'a8 act zoo',
      'ab1 off key dog',
      'a1 9 2 3 1',
      'zo4 4 7',
    ])
  })

  it('logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]', () => {
    expect(
      reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo', 'a2 act car'])
    ).toEqual(['a2 act car', 'g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'])
  })

  it('logs = ["dig1 8 1 5 1","let1 art zero can","dig2 3 6","let2 own kit dig","let3 art zero"]', () => {
    expect(
      reorderLogFiles(['dig1 8 1 5 1', 'let1 art zero can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'])
    ).toEqual(['let3 art zero', 'let1 art zero can', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'])
  })

  it('logs = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"]', () => {
    expect(reorderLogFiles(['j mo', '5 m w', 'g 07', 'o 2 0', 't q h'])).toEqual([
      '5 m w',
      'j mo',
      't q h',
      'g 07',
      'o 2 0',
    ])
  })
})
