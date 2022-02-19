/*
 * @lc app=leetcode id=860 lang=typescript
 *
 * [860] Lemonade Change
 */

// @lc code=start

function getChanges(change: number, money: Map<number, number>) {
  const changeUnits = [...money.entries()]
    .filter(([_, count]) => count)
    .map(([value]) => value)
    .sort((a, b) => b - a)

  let idx = 0

  while (change > 0 && idx < changeUnits.length) {
    let currentChange = changeUnits[idx]

    while (change >= currentChange && money.get(currentChange)) {
      change -= currentChange
      money.set(currentChange, money.get(currentChange) - 1)
    }

    idx++
  }

  return change === 0
}

function lemonadeChange(bills: number[]): boolean {
  const price = 5

  const moneyCounter = new Map<number, number>()

  for (const bill of bills) {
    moneyCounter.set(bill, (moneyCounter.get(bill) || 0) + 1)

    const change = bill - price

    if (change > 0) {
      if (!getChanges(change, moneyCounter)) {
        return false
      }
    }
  }

  return true
}
// @lc code=end

describe('lemonadeChange', () => {
  it('bills = [5,5,5,10,20]', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true)
  })

  it('bills = [5,5,10,10,20]', () => {
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false)
  })

  it('bills = [10,10]', () => {
    expect(lemonadeChange([10, 10])).toBe(false)
  })

  it('bills = [5,5,5,5,20,20,5,5,5,5]', () => {
    expect(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 5, 5])).toBe(false)
  })
})
