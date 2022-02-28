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

  interface NaryTreeNode<T = any> {
    val: T
    children: NaryTreeNode[]
  }

  interface ListNode<T = any> {
    val: any
    next?: ListNode<T>
  }
}

export {}
