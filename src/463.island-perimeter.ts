/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
  const _visited: Record<number, Record<number, boolean>> = {}

  const visited = (y: number, x: number, v?: boolean): boolean => {
    const yy = _visited[y] || (_visited[y] = {})
    if (v === undefined) {
      return yy[x]
    }

    yy[x] = v
  }

  let landCount = 0
  let connectedEdgeCount = 0

  const visitLand = (y: number, x: number) => {
    if (visited(y, x)) return

    visited(y, x, true)
    landCount++

    visitSibling(y, x - 1)
    visitSibling(y, x + 1)
    visitSibling(y - 1, x)
    visitSibling(y + 1, x)
  }

  const visitSibling = (y: number, x: number) => {
    if (!grid[y]?.[x]) {
      return
    }

    visitLand(y, x)
    connectedEdgeCount++
  }

  visitLand(...findFirstLand(grid))

  return landCount * 4 - connectedEdgeCount
}

function findFirstLand(grid: number[][]): [number, number] | null {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const element = grid[y][x]
      if (element) {
        return [y, x]
      }
    }
  }
}
// @lc code=end

describe('island perimeter', () => {
  test(' [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', () => {
    expect(
      islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ])
    ).toBe(16)
  })
})
