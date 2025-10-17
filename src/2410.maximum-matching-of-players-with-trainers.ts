/*
 * @lc app=leetcode id=2410 lang=typescript
 *
 * [2410] Maximum Matching of Players With Trainers
 */

// @lc code=start
function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => a - b)
  trainers.sort((a, b) => a - b)

  let i = players.length - 1
  let j = trainers.length - 1
  let count = 0

  for (; i >= 0 && j >= 0; ) {
    const player = players[i]
    const trainer = trainers[j]

    if (player <= trainer) {
      count++
      i--
      j--
    } else {
      i--
    }
  }

  return count
}
// @lc code=end

describe('Maximum Matching of Players With Trainers', () => {
  it('[4,7,9], [8,2,5,8]', () => {
    expect(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8])).toBe(2)
  })

  it('[1,1,1], [10]', () => {
    expect(matchPlayersAndTrainers([1, 1, 1], [10])).toBe(1)
  })

  it('complex', () => {
    expect(
      matchPlayersAndTrainers(
        [56563725, 763661320, 707284353, 169559687, 824944854],
        [
          764327984, 472832686, 732262503, 412251220, 567505886, 514120975, 592748479, 377842496,
          705222514, 357754473, 226699700, 376370669, 700431674, 549362887, 572373629, 29907462,
          455099822, 697035225, 752841629, 868901334, 456744149, 390681662, 99669290, 91713465,
          118141670,
        ],
      ),
    ).toBe(5)
  })
})
