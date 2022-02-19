/*
 * @lc app=leetcode id=852 lang=typescript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  const left = {
    index: 0,
    value: arr[0],
  }

  const right = {
    index: arr.length - 1,
    value: arr[arr.length - 1],
  }

  while (left.index !== right.index) {
    const mid = Math.floor((left.index + right.index) / 2)
    const value = arr[mid]

    const previous = arr[mid - 1]
    const after = arr[mid + 1]

    if (value > previous && value > after) {
      return mid
    }

    if (value > previous) {
      left.index = mid
      left.value = value
    } else {
      right.index = mid
      right.value = value
    }
  }

  return left.index
}
// @lc code=end

describe('peakIndexInMountainArray', () => {
  it('arr = [0,1,0]', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
  })

  it('arr = [0,2,1,0]', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
  })

  it('arr = arr = [0,10,5,2]', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1)
  })
})
