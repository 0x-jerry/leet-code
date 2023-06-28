/*
 * @lc app=leetcode id=936 lang=typescript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
interface StampingPosition {
  stampingTo: number
  stampStartIdx: number
  stampMeaningfulLength: number
}

function movesToStamp(stamp: string, target: string): number[] {
  const stampingPos: StampingPosition[] = []

  const maxSteps = 10 * target.length

  let idx = target.length

  let lastOne: null | StampingPosition = null
  while (idx) {
    const hit = findLongestSameString(stamp, target, idx)

    if (hit.index === -1 || hit.length === 0) {
      return []
    }

    const stampingTo = idx - (hit.index + hit.length)
    idx = stampingTo

    if (idx < 0) {
      return []
    }

    const pos: StampingPosition = {
      stampStartIdx: hit.index,
      stampMeaningfulLength: hit.length,
      stampingTo: stampingTo,
    }

    lastOne = pos

    calcStampingPos(pos)

    if (stampingPos.length > maxSteps && idx > 0) {
      return []
    }
  }

  // > 0
  if (lastOne?.stampStartIdx) {
    return []
  }

  return stampingPos.map((item) => item.stampingTo)

  function calcStampingPos(pos: StampingPosition, insertIdx: number = stampingPos.length) {
    // 1. do not cover any other meaningful stamp pos
    // 2. if covered, then need to adjust the stamping sequence, should insert before covered pos, then check 1 again
    // 3. if do not have a available position, then exit

    const start = pos.stampingTo
    const end = start + stamp.length

    for (let index = 0; index < insertIdx; index++) {
      const current = stampingPos[index]
      const mStart = current.stampingTo + current.stampStartIdx
      const mEnd = mStart + current.stampMeaningfulLength

      if (inRange(mStart, start, end) || inRange(mEnd, start, end)) {
        return calcStampingPos(pos, index)
      }
    }

    stampingPos.splice(insertIdx, 0, pos)

    return true
  }
}

function inRange(n: number, min: number, max: number) {
  return n >= min && n < max
}

function findLongestSameString(stamp: string, target: string, targetEndIndex: number) {
  let len = stamp.length + 1

  while (len--) {
    const currentS = target.slice(targetEndIndex - len, targetEndIndex)

    if (!currentS) {
      continue
    }

    const idx = stamp.indexOf(currentS)

    if (idx >= 0) {
      return {
        length: len,
        index: idx,
      }
    }
  }

  return {
    length: 0,
    index: -1,
  }
}
// @lc code=end

describe('find the longest same string', () => {
  it('ab, ccabcd', () => {
    expect(findLongestSameString('abc', 'ccabcd', 5)).eql({
      length: 3,
      index: 0,
    })

    expect(findLongestSameString('abc', 'ccabcd', 4)).eql({
      length: 2,
      index: 0,
    })

    expect(findLongestSameString('abc', 'ababc', 2)).eql({
      length: 2,
      index: 0,
    })
  })
})

describe('move to stamp', () => {
  it('stamp = "abc", target = "ababc"', () => {
    expect(movesToStamp('abc', 'ababc')).eqls([0, 2])
  })

  it('stamp = "abca", target = "aabcaca"', () => {
    expect(movesToStamp('abca', 'aabcaca')).eql([3, 0, 1])
  })

  it('stamp = "aye", target = "eyeye"', () => {
    expect(movesToStamp('aye', 'eyeye')).eql([])
  })

  it('stamp = "cab", target = "cabbb"', () => {
    expect(movesToStamp('cab', 'cabbb')).eql([2, 1, 0])
  })
})
