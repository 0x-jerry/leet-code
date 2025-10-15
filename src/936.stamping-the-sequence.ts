/*
 * @lc app=leetcode id=936 lang=typescript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
function movesToStamp(stamp: string, target: string): number[] {
  const result: number[] = []

  const stampedMask: (boolean | string)[] = target.split('')

  for (let len = stamp.length; len > 0; len--) {
    let changed = true
    while (changed) {
      changed = false

      for (const idx of iterIndexOf(target, stamp, len)) {
        if (canStampOn(idx)) {
          changed = true

          stampOn(idx)
          result.push(idx)
        }
      }
    }
  }

  if (stampedMask.every((n) => n === true)) {
    return result.reverse()
  }

  return []

  function canStampOn(start: number) {
    let canStamp = false

    for (let i = 0; i < stamp.length; i++) {
      const startIdx = start + i
      if (stampedMask[startIdx] === true) {
        continue
      }

      if (stamp[i] === stampedMask[startIdx]) {
        canStamp = true
        continue
      }

      return false
    }

    return canStamp
  }

  function stampOn(start: number) {
    for (let i = start; i < start + stamp.length; i++) {
      stampedMask[i] = true
    }
  }
}

function* iterIndexOf(source: string, target: string, len: number) {
  for (let i = 0; i <= source.length - len; i++) {
    const str = source.slice(i, i + len)

    for (let j = 0; j <= target.length - len; j++) {
      if (str === target.slice(j, j + len)) {
        if (i - j >= 0) yield i - j
      }
    }
  }
}

// @lc code=end

describe('move to stamp', () => {
  it('stamp = "abc", target = "ababc"', () => {
    expect(movesToStamp('abc', 'ababc')).eqls([0, 2])
  })

  it('stamp = "abca", target = "aabcaca"', () => {
    expect(verify('abca', 'aabcaca')).toBe(true)
  })

  it('stamp = "aye", target = "eyeye"', () => {
    expect(movesToStamp('aye', 'eyeye')).eql([])
  })

  it('stamp = "cab", target = "cabbb"', () => {
    expect(movesToStamp('cab', 'cabbb')).eql([2, 1, 0])
  })

  it('stamp = "de", target = "ddeddeddee"', () => {
    expect(verify('de', 'ddeddeddee')).toBe(true)
  })

  it('stamp = "aq", target = "aqaaqaqqqaqqaaq"', () => {
    expect(verify('aq', 'aqaaqaqqqaqqaaq')).toBe(true)
  })

  it('stamp = "zbs", target = "zbzbsbszbssbzbszbsss"', () => {
    expect(verify('zbs', 'zbzbsbszbssbzbszbsss')).toBe(true)
  })

  it('stamp = "zbs", target = "zbssbzbs"', () => {
    expect(verify('zbs', 'zbssbzbs')).toBe(true)
  })

  it('stamp = "oz", target = "ooozz"', () => {
    expect(verify('oz', 'ooozz')).toBe(true)
  })
})

// verify("zbs", "zbssbzbs");

function verify(stamp: string, target: string) {
  const sequences = movesToStamp(stamp, target)
  console.log(sequences)

  const result = Array(target.length).fill(' ')

  for (const n of sequences) {
    for (let i = 0; i < stamp.length; i++) {
      const c = stamp[i]
      const pos = n + i
      result[pos] = c
    }
  }

  return target === result.join('')
}
