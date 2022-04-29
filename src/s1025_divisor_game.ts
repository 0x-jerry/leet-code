/*
 * @lc app=leetcode id=1025 lang=typescript
 *
 * [1025] Divisor Game
 */

// @lc code=start
const dp = {} as Record<string, number>
const tryMove = (n: number) => {
  if (dp[n]) return dp[n]

  if (n === 1) return false

  let max = ~~(n / 2)

  for (let idx = max; idx > 0; idx--) {
    if (n % idx !== 0) {
      continue
    }

    const next = n - idx
    if (!tryMove(next)) {
      dp[n] = idx
      return idx
    }
  }

  return false
}

const gDp = {} as Record<string, boolean>

function divisorGame(n: number): boolean {
  if (gDp[n] !== undefined) return gDp[n]

  // 1 => x => false

  // 2 => 1 x => true

  // 3 => 1 1 x => false
  // 3 => 1 + 2 => false
  // 					^ true

  // 4 => 1 1 1 x => true
  // 4 => 1 + 3 => true
  // 					^ false

  // 4 => 2 1 x => false
  // 4 => 2 + 2 => false
  // 					^ true

  // 5 => 1 + 4 => !4

  // 6 => 1 + 5 => !5 => !4
  // 6 => 2 + 4 => !4
  // 6 => 3 + 3 => !3

  const move = tryMove(n)
  if (!move) {
    gDp[n] = false
    return false
  }

  const result = !divisorGame(n - move)
  gDp[n] = result

  return result
}
// @lc code=end

describe('divisor game', () => {
  it('n = 2', () => {
    expect(divisorGame(2)).toBe(true)
  })

  it('n = 3', () => {
    expect(divisorGame(3)).toBe(false)
  })
})
