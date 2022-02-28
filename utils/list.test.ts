import { buildList } from './list'

describe('list', () => {
  it('build list from array', () => {
    expect(buildList([1, 2, 3])).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    })
  })
})
