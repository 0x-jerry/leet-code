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

    if (v.length) {
      return v
    }
  }

  return []

  function _movesToStamp(stamp: string, target: string, firstIdx: number) {
    const stampingPos: number[] = [firstIdx]

    let l = firstIdx,
      r = firstIdx + stamp.length

    while (true) {

      console.log(l, r)

      if (l > 0) {
        l = moveLeft({
          stamp,
          target,
          start: l,
        })

        if (l === -1) {
          return []
        }

        stampingPos.push(l)
      }

      if (r >= 0 && r < target.length) {
        r = moveRight({
          stamp,
          target,
          start: r,
        })

        if (r === -1) {
          return []
        }

        stampingPos.push(r - stamp.length)
      }

      if (l === 0 && r === target.length) {
        break
      }
    }

    return stampingPos.reverse()
  }
}

function moveLeft(opt: {
  stamp: string
  target: string
  start: number
  offset?: number
}): number {
  const { stamp, target, start, offset = stamp.length } = opt

  if (offset <= 0) {
    return -1
  }

  const left = start - offset

  if (left < 0) {
    return moveLeft({
      ...opt,
      offset: offset - 1
    })
  }

  const str = target.slice(left, start)

  const idx = stamp.indexOf(str)

  if (idx !== -1) {
    const _idx = left - idx

    return _idx < 0 ? -1 : _idx
  }

  return moveLeft({
    ...opt,
    offset: offset - 1
  })
}

function moveRight(opt: {
  stamp: string
  target: string
  start: number
  offset?: number
}): number {
  const { stamp, target, start, offset = stamp.length } = opt

  if (offset <= 0) {
    return -1
  }

  const right = start + offset

  if (right > target.length) {
    return moveRight({
      ...opt,
      offset: offset - 1
    })
  }

  const str = target.slice(start, right)

  const idx = stamp.lastIndexOf(str)

  if (idx !== -1) {
    const _idx = start - idx

    return _idx + stamp.length > target.length ? -1 : _idx
  }

  return moveRight({
    ...opt,
    offset: offset - 1
  })
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
    expect(verify("de", "ddeddeddee")).toBe(true)
  })

  it('stamp = "aq", target = "aqaaqaqqqaqqaaq"', () => {
    expect(verify("aq", "aqaaqaqqqaqqaaq")).toBe(true)
  })

  it('stamp = "zbs", target = "zbzbsbszbssbzbszbsss"', () => {
    expect(verify("zbs", "zbzbsbszbssbzbszbsss")).toBe(true)
  })

  it('stamp = "zbs", target = "zbssbzbs"', () => {
    expect(verify("zbs", "zbssbzbs")).toBe(true)
  })
})

function verify(stamp: string, target: string) {
  const sequnces = movesToStamp(stamp, target)

  const result = Array(target.length).fill(' ')

  for (const n of sequnces) {
    for (let i = 0; i < stamp.length; i++) {
      const c = stamp[i]
      const pos = n + i
      result[pos] = c
    }
  }

  return target === result.join('')
}