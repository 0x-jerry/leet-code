/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
      return false
    }

    const text = x.toString()
    return text.split('').reverse().join('') === text
};

