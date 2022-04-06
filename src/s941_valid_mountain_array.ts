/*
 * @lc app=leetcode id=941 lang=typescript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false

  let pre: number = null
  let preOffset: number = null
  let fliped = false

  for (let idx = 0; idx < arr.length; idx++) {
    const val = arr[idx]

    if (pre === null) {
      pre = val
    } else {
      let nextOffset = val - pre

      if (preOffset === null) {
        if (nextOffset > 0) {
          preOffset = nextOffset
        } else {
          return false
        }
      } else if (nextOffset === 0) {
        return false
      } else if (preOffset * nextOffset < 0) {
        if (!fliped) {
          preOffset = nextOffset
          fliped = true
        } else {
          return false
        }
      }
    }

    pre = val
  }

  return fliped
}
// @lc code=end

describe('valid mountain array', () => {
  it('arr = [2,1]', () => {
    expect(validMountainArray([2, 1])).toBe(false)
  })

  it('arr = [3,5,5]', () => {
    expect(validMountainArray([3, 5, 5])).toBe(false)
  })

  it('arr = [0,3,2,1]', () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true)
  })

  it('arr = [2,0,2]', () => {
    expect(validMountainArray([2, 0, 2])).toBe(false)
  })
})
