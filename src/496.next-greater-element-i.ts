/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const greaterElements = []

  for (let idx = 0; idx < nums1.length; idx++) {
    greaterElements.push(findNextGreaterValue(nums2, nums1[idx]))
  }

  return greaterElements
}

function findNextGreaterValue(nums: number[], val: number) {
  const idx2 = nums.indexOf(val)

  let t = null
  for (let i = idx2 + 1; i < nums.length; i++) {
    const n2 = nums[i]
    if (n2 > val) {
      t = n2
      break
    }
  }

  return t ?? -1
}
// @lc code=end

describe('next greater element', () => {
  test('nums1 = [4,1,2], nums2 = [1,3,4,2]', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
  })
})
