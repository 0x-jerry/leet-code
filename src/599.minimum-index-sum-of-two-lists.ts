/*
 * @lc app=leetcode id=599 lang=typescript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
  const map1 = new Map<string, number>()
  list1.forEach((v, idx) => map1.set(v, idx))

  const map2 = new Map<string, number>()
  list2.forEach((v, idx) => map2.set(v, idx))

  const lenMap = new Map<string, number>()

  let min = Infinity
  map1.forEach((idx, key) => {
    if (map2.has(key)) {
      const len = idx + map2.get(key)
      lenMap.set(key, len)
      min = Math.min(len, min)
    }
  })

  const r: string[] = []

  lenMap.forEach((count, key) => {
    if (count === min) r.push(key)
  })

  return r
}
// @lc code=end

describe('find restaurant', () => {
  test('list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]', () => {
    expect(
      findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
      )
    ).toEqual(['Shogun'])
  })

  test('list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]', () => {
    expect(
      findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King'])
    ).toEqual(['Shogun'])
  })

  test('list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]', () => {
    const r = findRestaurant(
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
    )

    const xx = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']

    expect(r.length).toBe(xx.length)
    expect(r).toEqual(expect.arrayContaining(xx))
  })

  test('list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]', () => {
    const r = findRestaurant(
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']
    )

    const xx = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']

    expect(r.length).toEqual(xx.length)
    expect(r).toEqual(expect.arrayContaining(xx))
  })

  test('list1 = ["KFC"], list2 = ["KFC"]', () => {
    expect(findRestaurant(['KFC'], ['KFC'])).toEqual(['KFC'])
  })
})
