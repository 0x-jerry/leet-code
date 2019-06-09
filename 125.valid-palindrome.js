/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const plain = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
    return plain === plain.split('').reverse().join('')
};

