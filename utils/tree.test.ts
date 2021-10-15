import { buildBinaryTree } from './tree'

describe('buildBinaryTree', () => {
  test('[1,null,2', () => {
    const node = buildBinaryTree([1, null, 2])

    expect(node).toEqual({
      val: 1,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    })
  })
})
