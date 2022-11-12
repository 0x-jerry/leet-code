/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
function interpret(command: string): string {
  return command.replace(/(\(al\)|\(\))/g, (n) => (n === '()' ? 'o' : 'al'))
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
