/**
 * 按层级构建一棵二叉树
 * @param values
 * @returns
 */
export function buildBinaryTree<T>(values: T[]): TreeNode<T> {
  if (!values.length) return null

  let idx = 0

  const root = createNode(values[idx++])

  const queue: TreeNode[] = [root]

  while (queue.length) {
    const node = queue.shift()

    if (idx >= values.length) {
      break
    }

    const leftVal = values[idx++]

    node.left = leftVal === null ? null : createNode(leftVal)
    if (node.left) queue.push(node.left)

    if (idx >= values.length) {
      break
    }

    const rightVal = values[idx++]

    node.right = rightVal === null ? null : createNode(rightVal)
    if (node.right) queue.push(node.right)
  }

  return root
}

export function createNode<T>(val: T, left: TreeNode<T> = null, right: TreeNode<T> = null): TreeNode<T> {
  return {
    val,
    left,
    right,
  }
}

export function buildNaryTree(arr: (number | null)[] = []) {
  if (!arr.length) return null

  let idx = 0
  const root: NaryTreeNode = {
    val: arr[idx++],
    children: [],
  }

  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    // skip null node
    idx++

    if (idx >= arr.length) break

    for (; idx < arr.length; idx++) {
      const val = arr[idx]

      if (val === null) {
        break
      }

      const subNode = {
        val: val,
        children: [],
      }

      node.children.push(subNode)
      queue.push(subNode)
    }
  }

  return root
}

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
