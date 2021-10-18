/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const relatives = score
    .map((s, idx) => ({
      idx,
      score: s,
    }))
    .sort((a, b) => b.score - a.score)

  const placeMap = ['Gold Medal', 'Silver Medal', 'Bronze Medal']

  const places: string[] = []

  relatives.forEach((i, idx) => {
    places[i.idx] = placeMap[idx] || (idx + 1).toString()
  })

  //
  return places
}
// @lc code=end

describe('find relative ranks', () => {
  test('[5,4,3,2,1]', () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual(['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'])
  })

  test('[10,3,8,9,4]', () => {
    expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual(['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'])
  })
})
