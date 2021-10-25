/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let currentRange = flowerbed[0] === 0 ? 1 : 0

  let sum = 0
  const addSum = (range: number, addition = 0) => {
    if (range % 2 === 0) {
      sum += range / 2 - 1 + addition
    } else {
      sum += ~~(range / 2)
    }
  }

  for (const n of flowerbed) {
    if (n === 0) {
      currentRange++
    } else {
      if (currentRange > 0) {
        addSum(currentRange)
      }

      currentRange = 0
    }
  }

  if (currentRange > 0) {
    addSum(currentRange, flowerbed[flowerbed.length - 1] === 0 ? 1 : 0)
  }

  if (currentRange === flowerbed.length) {
    sum = Math.ceil(currentRange / 2)
  }

  return sum >= n
}
// @lc code=end

describe('can place flowers', () => {
  test('flowerbed = [1,0,0,0,1], n = 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
  })

  test('flowerbed = [1,0,0,0,1], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
  })

  test('flowerbed = [0,0,1,0,1], n = 1', () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true)
  })

  test('flowerbed = [1,0,0,0,1,0,0], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
  })

  test('flowerbed = [0], n = 1', () => {
    expect(canPlaceFlowers([0], 1)).toBe(true)
  })

  test('flowerbed = [0, 0], n = 2', () => {
    expect(canPlaceFlowers([0, 0], 2)).toBe(false)
  })

  test('flowerbed = [1, 0, 0], n = 1', () => {
    expect(canPlaceFlowers([1, 0, 0], 1)).toBe(true)
  })

  test('flowerbed = [0, 0, 0], n = 2', () => {
    expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true)
  })
})
