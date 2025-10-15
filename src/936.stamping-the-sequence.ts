/*
 * @lc app=leetcode id=936 lang=typescript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
function movesToStamp(stamp: string, target: string): number[] {
  for (let i = 0; i <= target.length - stamp.length; i++) {

    if (target.slice(i, i + stamp.length) !== stamp) {
      continue
    }

    const v = _movesToStamp(stamp, target, i)

    if (v.l === 0 && v.r === target.length && v.v.length) {
      return v.v
    } else if (v.v.length) {
      let result = v.v

      if (v.l > 0) {
        const ll = movesToStamp(stamp, target.slice(0, v.l))

        if (ll.length) {
          result = [...ll, ...result]
        } else {
          break
        }
      }

      if (v.r < target.length) {
        const rr = movesToStamp(stamp, target.slice(v.r))

        if (rr.length) {
          result = [...result, ...rr.map(x => x + v.r)]
        } else {
          break
        }
      }

      return result
    }
  }

  return []

  function _movesToStamp(stamp: string, target: string, firstIdx: number) {
    const stampingPos: number[] = [firstIdx]

    let l = firstIdx,
      r = firstIdx + stamp.length

    let fl = l, fr = r

    while (true) {
      if (l > 0) {
        l = moveLeft(l)
        if (l === -1) {
          continue
        }
        fl = l
        stampingPos.push(l)
      }

      if (r >= 0 && r < target.length) {
        r = moveRight(r)
        if (r === -1) {
          continue
        }

        fr = r
        stampingPos.push(r - stamp.length)
      }

      if ((l === 0 || l === -1) && (r === target.length || r === -1)) {
        break
      }
    }

    return {
      v: stampingPos.reverse(),
      l: fl,
      r: fr
    }

    function moveLeft(leftEdge: number, offset: number = stamp.length) {
      if (offset <= 0) {
        return -1
      }

      const left = leftEdge - offset

      if (left < 0) {
        return moveLeft(leftEdge, offset - 1)
      }

      const leftStr = target.slice(left, leftEdge)

      if (stamp.startsWith(leftStr)) {
        return left
      }

      return moveLeft(leftEdge, offset - 1)
    }

    function moveRight(rightEdge: number, offset: number = stamp.length) {
      if (offset <= 0) {
        return -1
      }

      const right = rightEdge + offset

      if (right > target.length) {
        return moveRight(rightEdge, offset - 1)
      }

      const rightStr = target.slice(rightEdge, right)

      if (stamp.endsWith(rightStr)) {
        return right
      }

      return moveRight(rightEdge, offset - 1)
    }
  }
}

// @lc code=end

describe("move to stamp", () => {
  it('stamp = "abc", target = "ababc"', () => {
    expect(movesToStamp("abc", "ababc")).eqls([0, 2])
  })

  it('stamp = "abca", target = "aabcaca"', () => {
    expect(movesToStamp("abca", "aabcaca")).eql([3, 0, 1])
  })

  it('stamp = "aye", target = "eyeye"', () => {
    expect(movesToStamp("aye", "eyeye")).eql([])
  })

  it('stamp = "cab", target = "cabbb"', () => {
    expect(movesToStamp("cab", "cabbb")).eql([2, 1, 0])
  })

  it('stamp = "de", target = "ddeddeddee"', () => {
    expect(movesToStamp("de", "ddeddeddee")).eql([5, 2, 8, 6, 3, 0, 7, 4, 1])
  })

  it('stamp = "aq", target = "aqaaqaqqqaqqaaq"', () => {
    expect(movesToStamp("aq", "aqaaqaqqqaqqaaq")).eql([8, 11, 7, 1, 12, 10, 6, 4, 2, 13, 9, 5, 3, 0])
  })
})
