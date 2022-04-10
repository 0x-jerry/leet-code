/*
 * @lc app=leetcode id=989 lang=typescript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
function addToArrayForm(num: number[], k: number): number[] {
  num = num.reverse()

  let carryBit = 0
  let idx = 0

  const r: number[] = []

  while (k > 0 || idx < num.length) {
    const bit = k % 10
    const n = num[idx++] || 0

    const value = n + bit + carryBit
    carryBit = 0

    if (value >= 10) {
      r.push(value % 10)
      carryBit = Math.floor(value / 10)
    } else {
      r.push(value)
    }

    k = Math.floor(k / 10)
  }

  if (carryBit) r.push(carryBit)

  return r.reverse()
}
// @lc code=end

describe('add to array from', () => {
  it('num = [1,2,0,0], k = 34', () => {
    expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4])
  })

  it('num = [2,7,4], k = 181', () => {
    expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5])
  })

  it('num = [2,1,5], k = 806', () => {
    expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1])
  })

  it('num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k = 516', () => {
    expect(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)).toEqual([
      1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9,
    ])
  })
})
