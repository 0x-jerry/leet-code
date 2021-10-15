/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []

  const units = {
    ']': '[',
    '}': '{',
    ')': '('
  }

  const rightChars = [')', ']', '}']

  const chars = s.split('')
  for (const c of chars) {
    stack.push(c)

    if (stack.length >= 2 && rightChars.includes(c)) {
      const one = stack.pop()
      const other = stack.pop()
      if (units[one] !== other) {
        return false
      }
    }
  }

  return stack.length === 0
}
