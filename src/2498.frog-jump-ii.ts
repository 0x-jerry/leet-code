/*
 * @lc app=leetcode id=2498 lang=typescript
 *
 * [2498] Frog Jump II
 */

// @lc code=start
function maxJump(stones: number[]): number {
  if (stones.length === 2) {
    return stones[1] - stones[0]
  }

  const len = stones.length

  let previous = 0
  let current = 2
  let maxValue = stones[current]
  let end = false

  while (current !== 0) {
    previous = current

    if (end) {
      if (current === len - 1) {
        if (len % 2 === 0) {
          current -= 2
        } else {
          current -= 1
        }
      } else {
        current -= 2
      }

      if (current < 0) {
        current = 0
      }
    } else {
      current += 2

      if (current > len - 1) {
        current = len - 1
      }

      if (current === len - 1) {
        end = true
      }
    }

    maxValue = Math.max(maxValue, Math.abs(stones[current] - stones[previous]))
  }

  return maxValue
}
// @lc code=end

describe('Frog Jump II', () => {
  it('stones = [0,2,5,6,7]', () => {
    const stones = [0, 2, 5, 6, 7]
    expect(maxJump(stones)).toBe(5)
  })

  it('stones = [0,3,9]', () => {
    const stones = [0, 3, 9]
    expect(maxJump(stones)).toBe(9)
  })

  it('stones = [0,3]', () => {
    const stones = [0, 3]
    expect(maxJump(stones)).toBe(3)
  })

  it('stones = [0,5,12,25,28,35]', () => {
    const stones = [0, 5, 12, 25, 28, 35]

    expect(maxJump(stones)).toBe(20)
  })
})
