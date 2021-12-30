/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

interface LRUOptions {
  /**
   * @default 500
   */
  limit: number
}

interface NodeI<K = unknown, V = unknown> {
  key: K
  value: V

  previous?: NodeI<K, V>
  next?: NodeI<K, V>
}

class NodeImplement<K, V> implements NodeI<K, V> {
  key: K
  value: V

  constructor(key: K, value: V) {
    this.key = key
    this.value = value
  }

  previous?: NodeI<K, V>
  next?: NodeI<K, V>
}

/**
 * Least Recently Used
 *
 * O(1)
 */
class LRU<Key = string, Value = unknown> {
  _cache = new Map<Key, NodeI<Key, Value>>()
  _tail?: NodeI<Key, Value>
  _lead?: NodeI<Key, Value>

  readonly limit: number

  constructor(option: Partial<LRUOptions> = {}) {
    this.limit = option.limit ?? 500
  }

  set(key: Key, value: Value): void {
    if (this._cache.has(key)) {
      const node = this._cache.get(key)!
      node.value = value
      this.touchExistOne(node)

      return
    }

    // new node
    const node = new NodeImplement(key, value)

    if (this._cache.size === 0) {
      this._lead = node
      this._tail = node
      this._cache.set(node.key, node)

      return
    }

    if (this._cache.size === this.limit) {
      this._cache.delete(this._tail!.key)
      this._tail = this._tail!.previous || node

      if (this._tail) {
        this._tail!.next = undefined
      }

      this._lead!.previous = node
      node.next = this._lead
      this._lead = node

      this._cache.set(node.key, node)
      return
    }

    this._lead!.previous = node
    node.next = this._lead
    this._lead = node

    this._cache.set(node.key, node)
  }

  get(key: Key): Value | undefined {
    if (!this._cache.has(key)) {
      return
    }

    const node = this._cache.get(key)!
    this.touchExistOne(node)

    return node.value
  }

  touchExistOne(node: NodeI<Key, Value>) {
    if (node.next && node.previous) {
      node.next.previous = node.previous
      node.previous.next = node.next

      this._lead!.previous = node

      node.next = this._lead
      node.previous = undefined

      this._lead = node
      return
    }

    if (node.previous) {
      node.previous.next = undefined
      this._tail = node.previous

      this._lead!.previous = node

      node.next = this._lead
      node.previous = undefined

      this._lead = node
      return
    }
  }

  reset() {
    this._cache.clear()
    this._lead = undefined
    this._tail = undefined
  }
}

function getNow() {
  return new Date().getTime()
}

class LRUCache {
  lru: LRU<number, number>

  constructor(capacity: number) {
    this.lru = new LRU({ limit: capacity })
  }

  get(key: number): number {
    return this.lru.get(key) ?? -1
  }

  put(key: number, value: number): void {
    this.lru.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
