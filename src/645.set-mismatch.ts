/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  const errorNums = new Set<number>()
  const missNums = new Set<number>()

  let repeat = null
  for (let idx = 0; idx < nums.length; idx++) {
    const n = nums[idx]
    if (n === idx + 1) {
      continue
    }

    if (errorNums.has(n)) {
      repeat = n
    }

    errorNums.add(n)
    missNums.add(idx + 1)
  }

  missNums.forEach((n) => {
    if (errorNums.has(n)) {
      missNums.delete(n)
      errorNums.delete(n)
    }
  })

  return [...(repeat !== null ? [repeat] : errorNums), ...missNums]
}
// @lc code=end

describe('find error nums', () => {
  test('nums = [1,2,2,4]', () => {
    expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3])
  })

  test('nums = [1,1]', () => {
    expect(findErrorNums([1, 1])).toEqual([1, 2])
  })

  test('nums = [2, 2]', () => {
    expect(findErrorNums([2, 2])).toEqual([2, 1])
  })

  test('nums = [3,2,2]', () => {
    expect(findErrorNums([3, 2, 2])).toEqual([2, 1])
  })

  test('nums = [2,3,2]', () => {
    expect(findErrorNums([2, 3, 2])).toEqual([2, 1])
  })
})
