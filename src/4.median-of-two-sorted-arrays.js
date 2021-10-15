/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len = nums1.length + nums2.length
  const isOdd = len % 2 !== 0

  let i1 = 0
  let i2 = 0

  let idx = 0
  let mid = 0
  while (idx < len / 2) {
    const val1 = nums1[i1] === undefined ? Infinity : nums1[i1]
    const val2 = nums2[i2] === undefined ? Infinity : nums2[i2]

    if (val1 < val2) {
      i1++
      mid = val1
    } else {
      i2++
      mid = val2
    }

    idx++
  }

  const val1 = nums1[i1] === undefined ? Infinity : nums1[i1]
  const val2 = nums2[i2] === undefined ? Infinity : nums2[i2]

  if (isOdd) {
    return mid.toFixed(1)
  } else {
    return ((mid + Math.min(val1, val2)) / 2).toFixed(1)
  }
}

// console.log(findMedianSortedArrays([1, 3], [2]))
// @lc code=end
