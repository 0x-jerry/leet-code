/*
 * @lc app=leetcode id=697 lang=typescript
 *
 * [697] Degree of an Array
 */

// @lc code=start
interface SubArray {
  num: number
  count: number
  start: number
  end: number
}

function findShortestSubArray(nums: number[]): number {
  const subMap: Record<string, SubArray> = {}

  let max = 0
  let maxNum: number[] = []

  nums.forEach((v, idx) => {
    const s =
      subMap[v] ||
      (subMap[v] = {
        num: v,
        count: 0,
        start: idx,
        end: idx,
      })

    s.count++
    s.end = idx

    if (s.count > max) {
      maxNum = [s.num]
      max = s.count
    } else if (s.count === max) {
      maxNum.push(s.num)
    }
  })

  let min = Infinity

  for (const num of maxNum) {
    const v = subMap[num]
    min = Math.min(min, v.end - v.start + 1)
  }

  return min
}
// @lc code=end

describe('find shortes sub array', () => {
  test('nums = [1,2,2,3,1]', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
  })

  test('nums = [1,2,2,3,1,4,2]', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
  })
})
