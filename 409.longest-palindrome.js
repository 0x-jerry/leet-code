/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const collection = count(s)
  let len = 0
  let hasOdd = 0

  for (const key of collection.keys()) {
    const count = collection.get(key)
    if (count % 2 === 0) {
      len += count
    } else {
      hasOdd = 1
      len += count - 1
    }
  }

  return len + hasOdd

  function count(str) {
    const collection = new Map()
    str.split('').forEach((c) => {
      const count = collection.get(c) || 0

      collection.set(c, count + 1)
    })

    return collection
  }
}
// @lc code=end

const assert = require('assert')
const test = (args, expect) => assert.strictEqual(longestPalindrome(...args), expect, String(args))
test(['abccccdd'], 7)
test(['a'], 1)
test(['bb'], 2)
test(['ccc'], 3)
test(
  [
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
  ],
  983
)
