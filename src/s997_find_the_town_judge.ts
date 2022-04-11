/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  if (n === 1) {
    return trust.length ? -1 : 1
  }

  interface Trust {
    trustedBy: number
    trust: number
  }

  const people = new Map<number, Trust>()

  for (const item of trust) {
    if (!people.has(item[0])) {
      people.set(item[0], {
        trust: 0,
        trustedBy: 0,
      })
    }

    if (!people.has(item[1])) {
      people.set(item[1], {
        trust: 0,
        trustedBy: 0,
      })
    }

    const p = people.get(item[0])
    const t = people.get(item[1])

    p.trust++
    t.trustedBy++
  }

  for (const [key, v] of people.entries()) {
    if (v.trust === 0 && v.trustedBy === n - 1) {
      return key
    }
  }

  return -1
}
// @lc code=end

describe('find judge', () => {
  it('n = 1, trust = []', () => {
    expect(findJudge(1, [])).toBe(1)
  })

  it('n = 2, trust = [[1,2]]', () => {
    expect(findJudge(2, [[1, 2]])).toBe(2)
  })

  it('n = 3, trust = [[1,3],[2,3]]', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3)
  })

  it('n = 3, trust = [[1,3],[2,3],[3,1]]', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1)
  })

  it('n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]', () => {
    expect(
      findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ])
    ).toBe(3)
  })
})
