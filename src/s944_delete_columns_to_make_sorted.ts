/*
 * @lc app=leetcode id=944 lang=typescript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  const size = strs[0].length

  let deleteCount = 0

  for (let col = 0; col < size; col++) {
    for (let row = 1; row < strs.length; row++) {
      const char = strs[row][col]

      const preChar = strs[row - 1][col]

      if (preChar.localeCompare(char) > 0) {
        deleteCount++
        break
      }
    }
  }

  return deleteCount
}
// @lc code=end

describe('min deletion size', () => {
  it('strs = ["cba","daf","ghi"]', () => {
    expect(minDeletionSize(['cba', 'daf', 'ghi'])).toBe(1)
  })

  it('strs = ["a","b"]', () => {
    expect(minDeletionSize(['a', 'b'])).toBe(0)
  })

  it('strs = ["zyx","wvu","tsr"]', () => {
    expect(minDeletionSize(['zyx', 'wvu', 'tsr'])).toBe(3)
  })
})
