// export interface TreeNode<T = any> {
//   val: T
//   left?: TreeNode<T>
//   right?: TreeNode<T>
// }

declare global {
  interface TreeNode<T = any> {
    val: T
    left?: TreeNode<T>
    right?: TreeNode<T>
  }
}

export {}
