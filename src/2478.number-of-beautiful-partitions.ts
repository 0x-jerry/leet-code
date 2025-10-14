/*
 * @lc app=leetcode id=2478 lang=typescript
 *
 * [2478] Number of Beautiful Partitions
 */

// @lc code=start
function beautifulPartitions(s: string, k: number, minLength: number): number {
  let i = 0,
    count = 0,
    j = 0,
    current_len = 0,
    len = s.length

  // biome-ignore lint/suspicious/noAssignInExpressions: test
  while (i < len && (j = seekBeautiful(s, i)) && j !== -1) {
    current_len += j - i + 1

    if (current_len >= minLength) {
      current_len = 0
      count++
    }

    i = j + 1
  }

  if (j === -1 || current_len !== 0) {
    return 0
  }

  if (count < k) {
    return 0
  }

  return combination(count - 1, k - 1)

  function seekBeautiful(s: string, start: number): number {
    let i = start,
      len = s.length

    if (!isPrime(s[start])) {
      return -1
    }

    while (i < len) {
      if (!isPrime(s[i]) && (i + 1 === len || isPrime(s[i + 1]))) {
        return i
      }

      i++
    }

    return -1
  }

  function combination(n: number, k: number): number {
    if (k < 0 || k > n) return 0
    if (k === 0 || k === n) return 1

    // Use iterative approach to avoid large factorials
    let result = 1
    for (let i = 1; i <= k; i++) {
      result = (result * (n - i + 1)) / i
    }
    return result
  }

  function isPrime(n: string) {
    return n === '2' || n === '3' || n === '5' || n === '7'
  }
}
// @lc code=end

describe('beautifulPartitions', () => {
  it('23542185131, 3, 2', () => {
    expect(beautifulPartitions('23542185131', 3, 2)).toBe(3)
  })

  it('23542185131, 3, 3', () => {
    expect(beautifulPartitions('23542185131', 3, 3)).toBe(1)
  })

  it('3312958, 3, 1', () => {
    expect(beautifulPartitions('3312958', 3, 1)).toBe(1)
  })

  it('783938233588472343879134266968, 4, 6', () => {
    /**
     * 783938 | 2335884 | 723438 | 79134266968
     * 783938 | 2335884 | 723438791 | 34266968
     * 783938 | 2335884 | 72343879134 | 266968
     * 783938 | 23358847234 | 3879134 | 266968
     */
    expect(beautifulPartitions('783938233588472343879134266968', 4, 6)).toBe(4)
  })
})
