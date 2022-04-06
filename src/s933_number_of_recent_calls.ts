/*
 * @lc app=leetcode id=933 lang=typescript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start
class RecentCounter {
  queue = []
  lastIdx = 0
  lastCount = 0
  constructor() {}

  ping(t: number): number {
    this.queue.push(t)

    let ms = t - 3000

    for (let idx = this.lastIdx; idx < this.queue.length; idx++) {
      const ts = this.queue[idx]
      if (ts < ms) {
        this.lastCount--
      } else {
        this.lastIdx = idx
        break
      }
    }

    this.lastCount++

    return this.lastCount
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

describe('number of recent calls', () => {
  it('[null, 1, 2, 3, 3]', () => {
    const x = new RecentCounter()

    expect(x.ping(1)).toBe(1)

    expect(x.ping(100)).toBe(2)
    expect(x.ping(3001)).toBe(3)
    expect(x.ping(3002)).toBe(3)
  })
})
