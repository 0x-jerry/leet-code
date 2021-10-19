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
