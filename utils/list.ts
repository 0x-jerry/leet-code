export function buildList<T = any>(arr: T[]): ListNode<T> {
  let root: ListNode<T> | null = null

  let previous: ListNode<T> | null = null

  for (const item of arr) {
    const node: ListNode<T> = {
      val: item,
      next: null,
    }

    if (!root) {
      previous = root = node
    } else {
      previous.next = node
      previous = previous.next
    }
  }

  return root
}
