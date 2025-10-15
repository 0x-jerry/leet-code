/*
 * @lc app=leetcode id=936 lang=typescript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
function movesToStamp(stamp: string, target: string): number[] {

  for (let i = 0; i < target.length; i++) {

    if (target.slice(i, i + stamp.length) === stamp) {
      const v = _movesToStamp(stamp, target, i)

      if (v.length) {
        return v
      }
    }

  }

  return []

  function _movesToStamp(stamp: string, target: string, firstIdx: number): number[] {
    const stampingPos: number[] = []

    if (firstIdx === -1) {
      return stampingPos
    }

    const maxIterCount = target.length * 10

    stampingPos.push(firstIdx)

    let l = firstIdx,
      r = firstIdx + stamp.length

    while (true) {
      if (l > 0) {
        l = moveLeft(l)
        if (l === -1) {
          return []
        }
        stampingPos.push(l)
      }

      if (r < target.length) {
        r = moveRight(r)
        if (r === -1) {
          return []
        }
        stampingPos.push(r - stamp.length)
      }

      if (stampingPos.length > maxIterCount) {
        return []
      }

      if (l === 0 && r === target.length) {
        break
      }
    }

    return stampingPos.reverse()

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
