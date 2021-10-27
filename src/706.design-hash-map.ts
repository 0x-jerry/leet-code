/*
 * @lc app=leetcode id=706 lang=typescript
 *
 * [706] Design HashMap
 */

import { testWithClass } from '../utils/classUtils'

// @lc code=start
class MyHashMap {
  #store: number[] = []

  constructor() {}

  put(key: number, value: number): void {
    this.#store[key] = value
    return null
  }

  get(key: number): number {
    return this.#store[key] ?? -1
  }

  remove(key: number): void {
    delete this.#store[key]
    return null
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

const t = testWithClass(MyHashMap)

describe('my hash map', () => {
  test(`["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
  [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]`, () => {
    expect(
      t(
        ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'],
        [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
      )
    ).toEqual([null, null, null, 1, -1, null, 1, null, -1])
  })
})
