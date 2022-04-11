/*
 * @lc app=leetcode id=999 lang=typescript
 *
 * [999] Available Captures for Rook
 */

// @lc code=start
function numRookCaptures(board: string[][]): number {
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < row.length; j++) {
      const v = row[j]
      if (v === 'R') {
        return checkCaptures(j, i)
      }
    }
  }

  return 0

  function checkCaptures(x: number, y: number): number {
    let count = 0

    for (let idx = y + 1; idx < 8; idx++) {
      const v = board[idx][x]
      if (v === 'p') {
        count++
        break
      }

      if (v === 'B') {
        break
      }
    }

    for (let idx = y - 1; idx >= 0; idx--) {
      const v = board[idx][x]
      if (v === 'p') {
        count++
        break
      }

      if (v === 'B') {
        break
      }
    }

    for (let idx = x + 1; idx < 8; idx++) {
      const v = board[y][idx]
      if (v === 'p') {
        count++
        break
      }

      if (v === 'B') {
        break
      }
    }

    for (let idx = x - 1; idx >= 0; idx--) {
      const v = board[y][idx]
      if (v === 'p') {
        count++
        break
      }

      if (v === 'B') {
        break
      }
    }

    return count
  }
}
// @lc code=end

describe('num rook captures', () => {
  it('3', () => {
    expect(
      numRookCaptures([
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', 'R', '.', '.', '.', 'p'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
      ])
    ).toBe(3)
  })

  it('0', () => {
    expect(
      numRookCaptures([
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
        ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
        ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
        ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
        ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
      ])
    ).toBe(0)
  })

  it('3', () => {
    expect(
      numRookCaptures([
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', 'B', '.', '.', '.', '.'],
        ['.', '.', '.', 'p', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
      ])
    ).toBe(3)
  })
})
