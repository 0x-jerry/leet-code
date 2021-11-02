/*
 * @lc app=leetcode id=728 lang=typescript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  const r = []
  for (let i = left; i <= right; i++) {
    if (isDividingNumber(i)) {
      r.push(i)
    }
  }

  return r
}

function isDividingNumber(num: number) {
  let n = num
  while (n >= 1) {
    const x = n % 10
    if (x === 0) return false

    if (num % x !== 0) {
      return false
    }
    n = Math.floor(n / 10)
  }

  return true
}
// @lc code=end

describe('self dividing numbers', () => {
  test('left = 1, right = 22', () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22])
  })

  test('left = 47, right = 85', () => {
    expect(selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77])
  })
})
