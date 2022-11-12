/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
function interpret(command: string): string {
  let idx = 0
  let r = ''

  while (idx < command.length) {
    if (command.slice(idx, 1) === 'G') {
      r += 'G'
    } else if (command.slice(idx, 2) === '()') {
      r += 'o'
    } else if (command.slice(idx, 4) === '(al)') {
      r += 'al'
    }
  }

  return r
}
// @lc code=end

describe('interpret', () => {
  it('command = "G()(al)"', () => {
    expect(interpret('G()(al)')).toBe('Goal')
  })

  it('command = "G()()()()(al)"', () => {
    expect(interpret('G()()()()(al)')).toBe('Gooooal')
  })

  it('command = "(al)G(al)()()G"', () => {
    expect(interpret('(al)G(al)()()G')).toBe('alGalooG')
  })
})
