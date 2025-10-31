/*
 * @lc app=leetcode id=3671 lang=typescript
 *
 * [3671] Sum of Beautiful Subsequences
 */

// @lc code=start
function totalBeauty(nums: number[]): number {
  const MAX_VALUE = 10 ** 9 + 7

  let totalBeauty = 0

  const maxNum = Math.max(...nums)

  const byDiv: number[][] = Array.from({ length: maxNum + 1 }, () => [])

  for (const num of nums) {
    for (let d = 1; d * d <= num; d++) {
      if (num % d === 0) {
        const x = num / d
        byDiv[d].push(x)

        if (x !== d) {
          byDiv[x].push(d)
        }
      }
    }
  }

  const f = new Array(maxNum + 1).fill(0)

  for (let g = 1; g <= maxNum; g++) {
    const arr = byDiv[g]
    if (arr.length === 0) continue

    const sortedNums = [...new Set(arr)].sort((a, b) => a - b)
    const pos = new Map(sortedNums.map((n, idx) => [n, idx + 1]))

    const t = Fenwick(sortedNums.length)

    let total = 0

    for (const num of arr) {
      const p = pos.get(num)!

      const previous = t.query(p - 1)

      const current = (previous + 1) % MAX_VALUE

      t.update(p, current)
      total = (total + current) % MAX_VALUE
    }

    f[g] = total
  }

  const countByGcd = new Array(maxNum + 1).fill(0)

  for (let gcd = maxNum; gcd > 0; gcd--) {
    let count = f[gcd]

    for (let k = 2 * gcd; k <= maxNum; k += gcd) {
      //
      count -= countByGcd[k]
      if (count < 0) count += MAX_VALUE
    }

    countByGcd[gcd] = count
  }

  for (let gcd = 1; gcd <= maxNum; gcd++) {
    totalBeauty = (totalBeauty + gcd * countByGcd[gcd]) % MAX_VALUE
  }

  return totalBeauty

  /**
   * https://www.wikiwand.com/en/articles/Fenwick_tree
   *
   * @param size
   * @returns
   */
  function Fenwick(size: number) {
    const bit = Array(size + 1).fill(0)

    return {
      size,
      bit,
      update(idx: number, value: number) {
        for (; idx <= size; idx += idx & -idx) {
          bit[idx] = (bit[idx] + value) % MAX_VALUE
        }
      },
      query(idx: number) {
        let count = 0

        for (; idx > 0; idx -= idx & -idx) {
          count = (count + bit[idx]) % MAX_VALUE
        }

        return count
      },
    }
  }
}
// @lc code=end

describe('Sum of Beautiful Subsequences', () => {
  it('nums = [1,2,3]', () => {
    const nums = [1, 2, 3]
    expect(totalBeauty(nums)).toBe(10)
  })

  it('nums = [10, 8, 6, 4]', () => {
    const nums = [10, 8, 6, 4]
    expect(totalBeauty(nums)).toBe(28)
  })

  it('nums = [4,6]', () => {
    const nums = [4, 6]
    expect(totalBeauty(nums)).toBe(12)
  })

  it('nums = [78,53]', () => {
    const nums = [78, 53]
    expect(totalBeauty(nums)).toBe(131)
  })

  it('nums = [33,9,77]', () => {
    const nums = [33, 9, 77]
    expect(totalBeauty(nums)).toBe(131)
  })

  it('nums = [23,90,59]', () => {
    const nums = [23, 90, 59]
    expect(totalBeauty(nums)).toBe(174)
  })

  it('nums = [91,16,76,61,99,60,96,2,57,86,2,4,12,31,79,72,45,54,100]', () => {
    const nums = [91, 16, 76, 61, 99, 60, 96, 2, 57, 86, 2, 4, 12, 31, 79, 72, 45, 54, 100]
    expect(totalBeauty(nums)).toBe(1694)
  })

  it('nums = [21,13,58,13,80,43,39,69,9,13,17,71,35,19,34,17,77,26,28]', () => {
    const nums = [21, 13, 58, 13, 80, 43, 39, 69, 9, 13, 17, 71, 35, 19, 34, 17, 77, 26, 28]
    expect(totalBeauty(nums)).toBe(1146)
  })

  it('time limited', () => {
    const nums = [
      522, 689, 519, 271, 970, 360, 234, 959, 319, 951, 276, 976, 464, 391, 118, 908, 669, 109, 898,
      42, 541, 680, 837, 972, 801, 180, 539, 90, 787, 380, 984, 661, 699, 779, 378, 53, 239, 133,
      443, 510, 397, 198, 478, 192, 74, 397, 658, 345, 360, 828, 542, 216, 741, 563, 313, 931, 294,
      641, 918, 650, 830, 393, 159, 888, 137, 893, 46, 87, 529, 368, 963, 694, 668, 303, 861, 497,
      942, 27, 928, 743, 78, 215, 893, 78, 859, 103, 65, 281, 949, 248, 837, 507, 571, 259, 985,
      281, 275, 283, 601, 610, 172, 201, 127, 985, 278, 285, 527, 147,
    ]
    expect(totalBeauty(nums)).toBe(16043163)
  })
})
