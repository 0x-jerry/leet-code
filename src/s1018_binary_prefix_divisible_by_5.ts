/*
 * @lc app=leetcode id=1018 lang=typescript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
function prefixesDivBy5(nums: number[]): boolean[] {
  const result: boolean[] = []

  const divisibleBy = 5
  let remainder = 0

  // https://www.wikiwand.com/en/Division_algorithm#/Integer_division_(unsigned)_with_remainder
  for (const bit of nums) {
    remainder = remainder << 1
    remainder = remainder | bit

    if (remainder >= divisibleBy) {
      remainder = remainder - divisibleBy
    }

    result.push(remainder === 0)
  }

  return result
}
// @lc code=end

describe('prefixes div by 5', () => {
  it('nums = [0,1,1]', () => {
    expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false])
  })

  it('nums = [1,1,1]', () => {
    expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false])
  })

  it('nums = [1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1]', () => {
    expect(
      prefixesDivBy5([
        1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0,
        0, 1,
      ])
    ).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
    ])
  })
})
