import { buildBinaryTree } from './tree'

describe('buildBinaryTree', () => {
  test('[1,null,2', () => {
    const node = buildBinaryTree([1, null, 2])

    expect(node).toEqual({
      val: 1,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    })
  })

  test('[]', () => {
    expect(buildBinaryTree([])).toBe(null)
  })

  test('[4, 2, 6, 1, 3]', () => {
    expect(buildBinaryTree([4, 2, 6, 1, 3])).toEqual({
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    })
  })
})
