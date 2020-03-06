/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

const stack = () => ({
  _value: [],
  push(x) {
    this._value.push(x)
  },
  pop() {
    return this._value.pop()
  },
  top() {
    return this._value[this.size - 1]
  },
  empty() {
    return this.size === 0
  },
  get size() {
    return this._value.length
  }
})

var MyQueue = function() {
  this.stack = stack()
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const s = stack()
  while (this.stack.size > 1) {
    s.push(this.stack.pop())
  }

  const r = this.stack.pop()

  while (s.size) {
    this.stack.push(s.pop())
  }

  return r
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const s = stack()

  while (this.stack.size) {
    s.push(this.stack.pop())
  }
  const r = s.pop()
  this.stack.push(r)

  while (s.size) {
    this.stack.push(s.pop())
  }

  return r
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.empty()
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

const assert = require('assert')

const q = new MyQueue()
q.push(1)
q.push(2)

assert.equal(q.peek(), 1)
assert.equal(q.pop(), 1)
assert.equal(q.empty(), false)
