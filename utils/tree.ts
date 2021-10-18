/**
 * 按层级构建一棵二叉树
 * @param values
 * @returns
 */
export function buildBinaryTree<T>(values: T[]): TreeNode<T> {
  if (!values.length) return null

  const insertLevelOrder = (node: TreeNode | null, idx: number) => {
    const val = values[idx]

    if (val === undefined || val === null) return null

    if (!node) {
      node = createNode(val)
    }

    node.left = insertLevelOrder(node.left, 2 * idx + 1)
    node.right = insertLevelOrder(node.right, 2 * idx + 2)

    return node
  }

  return insertLevelOrder(null, 0)
}

export function createNode<T>(val: T, left?: TreeNode<T>, right?: TreeNode<T>): TreeNode<T> {
  return {
    val,
    left,
    right,
  }
}
