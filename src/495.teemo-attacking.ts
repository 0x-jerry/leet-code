/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let sum = 0

  let preT = -1

  for (const t of timeSeries) {
    if (preT === -1) {
      preT = t
      continue
    }

    if (t - preT < duration) {
      sum += t - preT
    } else {
      sum += duration
    }

    preT = t
  }

  return sum + duration
}
// @lc code=end

describe('teemo attacking', () => {
  test('timeSeries = [1,4], duration = 2', () => {
    expect(findPoisonedDuration([1, 4], 2)).toBe(4)
  })

  test('timeSeries = [1,2], duration = 2', () => {
    expect(findPoisonedDuration([1, 2], 2)).toBe(3)
  })

  test('timeSeries = [1,2,3], duration = 1', () => {
    expect(findPoisonedDuration([0, 1, 2, 3], 1)).toBe(4)
  })
})
