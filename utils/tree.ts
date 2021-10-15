export function buildBinaryTree<T>(nodes: T[]): TreeNode<T> {
  let root = null

  for (const node of nodes) {
    const c = createNode(node)

    if (!root) {
      root = c
    }
  }

  return root
}

function createNode<T>(val: T, left?: TreeNode<T>, right?: TreeNode<T>): TreeNode<T> {
  return {
    val,
    left,
    right,
  }
}
