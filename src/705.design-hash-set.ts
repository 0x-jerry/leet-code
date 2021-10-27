/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

import { testWithClass } from '../utils/classUtils'

// @lc code=start
class MyHashSet {
  #store: boolean[] = []
  constructor() {}

  add(key: number): void {
    this.#store[key] = true

    return null
  }

  remove(key: number): void {
    delete this.#store[key]

    return null
  }

  contains(key: number): boolean {
    return this.#store[key] || false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

const t = testWithClass(MyHashSet)

describe('my hash set', () => {
  test(`["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
  [[], [1], [2], [1], [3], [2], [2], [2], [2]]`, () => {
    expect(
      t(
        ['MyHashSet', 'add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'],
        [[], [1], [2], [1], [3], [2], [2], [2], [2]]
      )
    ).toEqual([null, null, null, true, false, null, true, null, false])
  })
})
