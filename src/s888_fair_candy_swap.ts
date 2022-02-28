/*
 * @lc app=leetcode id=888 lang=typescript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const sum = (arr: number[]) => arr.reduce((pre, val) => pre + val, 0)

  const total = {
    alice: sum(aliceSizes),
    bob: sum(bobSizes),
  }

  const mid = (total.alice + total.bob) / 2

  const [few, much] = total.alice >= mid ? [bobSizes, aliceSizes] : [aliceSizes, bobSizes]

  const isAliceFewer = total.alice < total.bob

  const muchSet = new Set(much)

  for (const value of few) {
    const fewerTotal = isAliceFewer ? total.alice : total.bob

    const needValue = mid - fewerTotal + value
    if (muchSet.has(needValue)) {
      return isAliceFewer ? [value, needValue] : [needValue, value]
    }
  }

  return []
}
// @lc code=end

describe('fairCandySwap', () => {
  it('aliceSizes = [1,1], bobSizes = [2,2]', () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2])
  })

  it('aliceSizes = [1,2], bobSizes = [2,3]', () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2])
  })

  it('aliceSizes = [2], bobSizes = [1,3]', () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3])
  })

  it('aliceSizes = [1,2,5], bobSizes = [2,4]', () => {
    expect(fairCandySwap([1, 2, 5], [2, 4])).toEqual([5, 4])
  })
})
