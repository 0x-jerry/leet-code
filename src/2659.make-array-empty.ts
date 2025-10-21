/*
 * @lc app=leetcode id=2659 lang=typescript
 *
 * [2659] Make Array Empty
 */

// @lc code=start
function countOperationsToEmptyArray(nums: number[]): number {
  const sorted = nums
    .map((n, idx) => ({
      num: n,
      index: idx,
    }))
    .sort((a, b) => a.num - b.num)

  let finalIterCount = 0

  let previousIndex = -1
  let currentRoundSorted = 0
  let previousRoundSortedCount = 0

  for (let i = 0; i < sorted.length; i++) {
    const { index } = sorted[i]

    if (index < previousIndex) {
      finalIterCount += nums.length - previousRoundSortedCount

      previousRoundSortedCount += currentRoundSorted
      currentRoundSorted = 0
    }

    previousIndex = index
    currentRoundSorted++
  }

  return finalIterCount + currentRoundSorted
}
// @lc code=end

describe('Make Array Empty', () => {
  // 3,4,-1,3,4,_-1
  it('[3,4,-1]', () => {
    expect(countOperationsToEmptyArray([3, 4, -1])).toBe(5)
  })

  // 1,2,4,3,_1,_2,4,_3
  it('[1,2,4,3]', () => {
    expect(countOperationsToEmptyArray([1, 2, 4, 3])).toBe(5)
  })

  // 1,2,3
  it('[1,2,3]', () => {
    expect(countOperationsToEmptyArray([1, 2, 3])).toBe(3)
  })

  // -19, -11, -19, _-11
  it('[-19,-11]', () => {
    expect(countOperationsToEmptyArray([-19, -11])).toBe(2)
  })
})

// Each round it will cut removed items, the result should be n(round times) * nums.length - sum(each round has removed items).
// See example:

// [5,4,3,2,1] => 5
// 5,4,3,2,#1,
// 5,4,3,#2,_1,
// 5,4,#3,_2,_1,
// 5,#4,_3,_2,_1,
// #5,_4,_3,_2,_1
// [5,4,3,2,1]
// 15 = (5 * 5) - 1 - 2 - 3 - 4

// [1,2,3,4,5] => 1
// #1,#2,#3,#4,#5
// [1,2,3,4,5]
// 5 = 5 * 1

// [1,3,5, 4 ,2] => 3
// #1,5,#2,4,#3
// _1,5,_2,#4,_3
// _1,#5,_2,_4,_3
// [1,5,2,4,3]

// 8 = (5 * 3) - 3 - 4

// [3,1,2]
// 2,3,#1
// #2,#3,_1
// [2,3,1]
// 5 = 3 * 2 - 1
