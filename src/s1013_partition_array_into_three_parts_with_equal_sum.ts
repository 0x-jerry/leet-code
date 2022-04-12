/*
 * @lc app=leetcode id=1013 lang=typescript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((pre, cur) => pre + cur, 0)
  if (sum % 3 !== 0) return false

  const average = sum / 3

  let s = 0
  let times = 0
  for (let idx = 0; idx < arr.length; idx++) {
    const v = arr[idx]
    s += v

    if (s === average) {
      s = 0
      times++
    }

    if (times === 2) {
      const rest = arr.slice(idx + 1)
      return !!rest.length && rest.reduce((pre, cur) => pre + cur, 0) === average
    }
  }

  return false
}
// @lc code=end

describe('can three parts equal sum', () => {
  it('arr = [0,2,1,-6,6,-7,9,1,2,0,1]', () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBe(true)
  })

  it('arr = [0,2,1,-6,6,7,9,-1,2,0,1]', () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBe(false)
  })

  it('arr = [3,3,6,5,-2,2,5,1,-9,4]', () => {
    expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toBe(true)
  })

  it('arr = [1,-1,1,-1]', () => {
    expect(canThreePartsEqualSum([1, -1, 1, -1])).toBe(false)
  })
})
