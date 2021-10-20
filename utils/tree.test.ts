import { buildBinaryTree, buildNaryTree } from './tree'

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

  test('[2,5,null,3,null,1,4]', () => {
    expect(buildBinaryTree([2, 5, null, 3, null, 1, 4])).toEqual({
      val: 2,
      left: {
        val: 5,
        left: {
          val: 3,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: null,
    })
  })
})

describe('buildNaryTree', () => {
  test('root = [1,null,3,2,4,null,5,6]', () => {
    expect(buildNaryTree([1, null, 3, 2, 4, null, 5, 6])).toEqual({
      val: 1,
      children: [
        {
          val: 3,
          children: [
            {
              val: 5,
              children: [],
            },
            {
              val: 6,
              children: [],
            },
          ],
        },
        {
          val: 2,
          children: [],
        },
        {
          val: 4,
          children: [],
        },
      ],
    })
  })
})
