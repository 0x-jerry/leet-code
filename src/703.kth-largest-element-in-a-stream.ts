/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

import { testWithClass } from '../utils/classUtils'

// @lc code=start
class KthLargest {
  get largest() {
    return this.nums[this.k - 1]
  }

  constructor(public k: number, public nums: number[]) {
    this.nums.sort((a, b) => b - a)
  }

  add(val: number): number {
    let pushed = false
    for (let idx = 0; idx < this.nums.length; idx++) {
      const v = this.nums[idx]
      if (v < val) {
        pushed = true
        this.nums.splice(idx, 0, val)
        break
      }
    }

    if (!pushed) {
      this.nums.push(val)
    }

    return this.largest
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

const t = testWithClass(KthLargest)

describe('kth largest element in a stream', () => {
  test(`["KthLargest", "add", "add", "add", "add", "add"]
  [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]`, () => {
    expect(t(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]])).toEqual(
      [null, 4, 5, 5, 8, 8]
    )
  })

  test(`["KthLargest","add","add","add","add","add"]
  [[1,[]],[-3],[-2],[-4],[0],[4]]`, () => {
    expect(t(['KthLargest', 'add', 'add', 'add', 'add', 'add'], [[1, []], [-3], [-2], [-4], [0], [4]])).toEqual([
      null,
      -3,
      -2,
      -2,
      0,
      4,
    ])
  })
})
