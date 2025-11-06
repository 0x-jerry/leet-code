/*
 * @lc app=leetcode id=460 lang=typescript
 *
 * [460] LFU Cache
 */

// @lc code=start

interface LFUCacheNode {
  key: number
  freq: number
  value: number
}
class LFUCache {
  data = new Map<number, LFUCacheNode>()
  freqMap = new Map<number, LFUCacheNode[]>()
  _size = 0
  _minFreq = 0

  constructor(readonly capacity: number) {}

  get(key: number): number {
    const v = this.data.get(key)

    if (v) {
      this._update(v)
      return v.value
    }

    return -1
  }

  put(key: number, value: number): void {
    const v = this.data.get(key)

    if (v) {
      v.value = value
      this._update(v)
      return
    }

    const newNode: LFUCacheNode = {
      key,
      value,
      freq: 0,
    }

    this.data.set(key, newNode)

    this._update(newNode, true)
  }

  _update(currentNode: LFUCacheNode, isNew = false) {
    currentNode.freq++

    if (isNew) {
      if (this._size === this.capacity) {
        let freq = this._minFreq

        while (true) {
          const list = this.freqMap.get(freq)

          if (list?.length) {
            const node = list.shift()!
            this.data.delete(node.key)
            break
          }
          freq++
        }
      } else {
        this._size++
      }
    } else {
      const list = this.freqMap.get(currentNode.freq - 1)!
      const idx = list.indexOf(currentNode)
      list.splice(idx, 1)
    }

    if (this.freqMap.has(currentNode.freq)) {
      this.freqMap.get(currentNode.freq)!.push(currentNode)
    } else {
      this.freqMap.set(currentNode.freq, [currentNode])
    }

    return
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

describe('LFU Cache', () => {
  it('["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"] [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]', () => {
    testWith(
      ['LFUCache', 'put', 'put', 'get', 'put', 'get', 'get', 'put', 'get', 'get', 'get'],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]],
      [null, null, null, 1, null, -1, 3, null, -1, 3, 4],
    )
  })

  it('["LFUCache","put","put","get","get","get","put","put","get","get","get","get"] [[3],[2,2],[1,1],[2],[1],[2],[3,3],[4,4],[3],[2],[1],[4]]', () => {
    testWith(
      ['LFUCache', 'put', 'put', 'get', 'get', 'get', 'put', 'put', 'get', 'get', 'get', 'get'],
      [[3], [2, 2], [1, 1], [2], [1], [2], [3, 3], [4, 4], [3], [2], [1], [4]],
      [null, null, null, 2, 1, 2, null, null, -1, 2, 1, 4],
    )
  })

  it('["LFUCache","put","put","put","put","get"] [[2],[3,1],[2,1],[2,2],[4,4],[2]]', () => {
    testWith(
      ['LFUCache', 'put', 'put', 'put', 'put', 'get'],
      [[2], [3, 1], [2, 1], [2, 2], [4, 4], [2]],

      [],
    )
  })
})

function testWith(actions: string[], params: any[], expected: any[]) {
  let ins: LFUCache

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i]
    const p = params[i]
    const e = expected[i]

    if (action === 'LFUCache') {
      // @ts-expect-error
      ins = new LFUCache(...p)
    } else {
      // @ts-expect-error
      const r = ins[action](...p)

      if (e != null) expect(r).eql(e, `${action} with parameters ${JSON.stringify(p)} failed`)
    }
  }
}
