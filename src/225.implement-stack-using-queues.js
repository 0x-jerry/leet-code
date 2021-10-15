/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
const queue = () => ({
  _value: [],
  push(x) {
    this._value.push(x)
  },
  pop() {
    return this._value.shift()
  },
  get size() {
    return this._value.length
  },
  isEmpty() {
    return this.size === 0
  }
})

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = queue()
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const q = queue()

  while (this.queue.size > 1) {
    q.push(this.queue.pop())
  }

  const r = this.queue.pop()

  this.queue = q

  return r
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const q = queue()
  let last = null
  while (this.queue.size > 0) {
    last = this.queue.pop()
    q.push(last)
  }

  this.queue = q

  return last
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty()
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

const assert = require('assert')

const s = new MyStack()
s.push(1)
s.push(2)

assert.equal(s.top(), 2)
assert.equal(s.pop(), 2)
assert.equal(s.empty(), false)
