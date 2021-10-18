/**
 * 按层级构建一棵二叉树
 * @param values
 * @returns
 */
export function buildBinaryTree<T>(values: T[]): TreeNode<T> {
  if (!values.length) return null

  const insertLevelOrder = <T>(values: T[], node: TreeNode | null, idx: number) => {
    if (values.length < idx) return null
    const val = values[idx]

    if (val === undefined || val === null) return null

    if (!node) {
      node = createNode(val)
    }

    node.left = insertLevelOrder(values, node.left, 2 * idx + 1)
    node.right = insertLevelOrder(values, node.left, 2 * idx + 2)

    return node
  }

  return insertLevelOrder(values, null, 0)
}

export function buildBinarySearchTree(values: number[]): TreeNode<number> {
  if (!values.length) return null
}

export function createNode<T>(val: T, left?: TreeNode<T>, right?: TreeNode<T>): TreeNode<T> {
  return {
    val,
    left,
    right,
  }
}
