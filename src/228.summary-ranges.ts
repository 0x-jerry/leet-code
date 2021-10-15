/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const ranges = []

  const range = {
    start: null,
    end: null,
  }

  for (let idx = 0; idx < nums.length; idx++) {
    const val = nums[idx]
    const nextVal = nums[idx + 1]

    if (range.start === null) {
      range.start = val
    }

    if (val + 1 === nextVal) {
      range.end = nextVal
    } else {
      if (!range.end) {
        ranges.push(range.start + '')
      } else {
        ranges.push(range.start + '->' + range.end)
      }

      range.start = null
      range.end = null
    }
  }

  return ranges
}
// @lc code=end

describe('summary ranges', () => {
  test('[0,1,2,4,5,7]', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7'])
  })
})
