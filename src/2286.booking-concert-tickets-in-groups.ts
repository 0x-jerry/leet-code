/*
 * @lc app=leetcode id=2286 lang=typescript
 *
 * [2286] Booking Concert Tickets in Groups
 */

// @lc code=start

function SegmentTree(n: number) {
  const sum = Array(4 * n).fill(0)
  const max = Array(4 * n).fill(0)

  return {
    sum,
    max,
    build(initValue: number) {
      _build(1, 0, n - 1)

      return
      function _build(node: number, tl: number, tr: number) {
        if (tl === tr) {
          sum[node] = initValue
          max[node] = initValue
          return
        }

        const mid = Math.floor((tl + tr) / 2)

        _build(node * 2, tl, mid)
        _build(node * 2 + 1, mid + 1, tr)
        _updateNode(node)
      }
    },
    querySum(l: number, r: number) {
      return _querySum(1, 0, n - 1, l, r)

      function _querySum(node: number, tl: number, tr: number, l: number, r: number): number {
        if (l > r) return 0

        if (l === tl && r === tr) {
          return sum[node]
        }

        const mid = Math.floor((tl + tr) / 2)

        const leftSum = _querySum(node * 2, tl, mid, l, Math.min(mid, r))
        const rightSum = _querySum(node * 2 + 1, mid + 1, tr, Math.max(mid + 1, l), r)

        return leftSum + rightSum
      }
    },
    queryFirst(target: number) {
      return _queryFirst(1, 0, n - 1)

      function _queryFirst(node: number, tl: number, tr: number): number {
        if (max[node] < target) {
          return -1
        }

        if (tl === tr) {
          return tl
        }

        const mid = Math.floor((tl + tr) / 2)

        const leftMax = max[node * 2]
        if (leftMax >= target) {
          return _queryFirst(node * 2, tl, mid)
        }

        return _queryFirst(node * 2 + 1, mid + 1, tr)
      }
    },
    update(pos: number, value: number) {
      _update(1, 0, n - 1)
      return
      function _update(node: number, tl: number, tr: number) {
        if (tl === tr) {
          sum[node] = value
          max[node] = value
          return
        }

        const mid = Math.floor((tl + tr) / 2)

        if (pos <= mid) {
          _update(node * 2, tl, mid)
        } else {
          _update(node * 2 + 1, mid + 1, tr)
        }

        _updateNode(node)
      }
    },
  }

  function _updateNode(node: number) {
    sum[node] = sum[node * 2] + sum[node * 2 + 1]
    max[node] = Math.max(max[node * 2], max[node * 2 + 1])
  }
}

class BookMyShow {
  _tree

  constructor(
    readonly n: number,
    readonly m: number,
  ) {
    this._tree = SegmentTree(n)
    this._tree.build(m)
  }

  gather(k: number, maxRow: number): number[] {
    if (k > this.m) {
      return []
    }

    const rowIdx = this._tree.queryFirst(k)

    if (rowIdx === -1 || rowIdx > maxRow) {
      return []
    }

    const v = this._tree.querySum(rowIdx, rowIdx)
    this._tree.update(rowIdx, v - k)

    return [rowIdx, this.m - v]
  }

  scatter(k: number, maxRow: number): boolean {
    if (this._tree.querySum(0, maxRow) < k) {
      return false
    }

    let idx = this._tree.queryFirst(1)
    while (idx !== -1) {
      const v = this._tree.querySum(idx, idx)

      if (v > 0) {
        if (k >= v) {
          k -= v
          this._tree.update(idx, 0)
        } else {
          const newValue = v - k
          k = 0
          this._tree.update(idx, newValue)
        }
      }

      if (k === 0) {
        break
      }
      //
      idx = this._tree.queryFirst(1)
    }

    return true
  }
}

/**
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */
// @lc code=end

describe('Booking Concert Tickets in Groups', () => {
  it('["BookMyShow", "gather", "gather", "scatter", "scatter"] [[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]', () => {
    const actions = ['BookMyShow', 'gather', 'gather', 'scatter', 'scatter']
    const params = [
      [2, 5],
      [4, 0],
      [2, 0],
      [5, 1],
      [5, 1],
    ]

    const expected = [null, [0, 0], [], true, false]
    testWith(actions, params, expected)
  })

  it('["BookMyShow","gather","scatter","gather","gather","gather"] [[5,9],[10,1],[3,3],[9,1],[10,2],[2,0]]', () => {
    const actions = ['BookMyShow', 'gather', 'scatter', 'gather', 'gather', 'gather']

    const params = [
      [5, 9],
      [10, 1],
      [3, 3],
      [9, 1],
      [10, 2],
      [2, 0],
    ]

    const expected = [null, [], true, [1, 0], [], [0, 3]]

    testWith(actions, params, expected)
  })

  it('["BookMyShow","scatter","gather","gather","gather","scatter"] [[5,9],[2,2],[7,2],[4,1],[6,2],[2,1]]', () => {
    const actions = ['BookMyShow', 'scatter', 'gather', 'gather', 'gather', 'scatter']

    const params = [
      [5, 9],
      [2, 2],
      [7, 2],
      [4, 1],
      [6, 2],
      [2, 1],
    ]

    const expected = [null, true, [0, 2], [1, 0], [2, 0], true]

    testWith(actions, params, expected)
  })

  it('["BookMyShow","scatter","gather","gather"] [[3,7],[9,0],[2,2],[8,2]]', () => {
    const actions = ['BookMyShow', 'scatter', 'gather', 'gather']
    const params = [
      [3, 7],
      [9, 0],
      [2, 2],
      [8, 2],
    ]

    const expected = [null, false, [0, 0], []]

    testWith(actions, params, expected)
  })
})

function testWith(actions: string[], params: any[], expected: any[]) {
  let ins: BookMyShow

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i]
    const p = params[i]
    const e = expected[i]

    if (action === 'BookMyShow') {
      // @ts-expect-error
      ins = new BookMyShow(...p)
    } else {
      // @ts-expect-error
      const r = ins[action](...p)

      if (e != null) expect(r).eql(e, `${action} with parameters ${JSON.stringify(p)} failed`)
    }
  }
}
