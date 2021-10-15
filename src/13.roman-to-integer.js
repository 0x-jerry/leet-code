/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 1 I
  // 4 IV
  // 5 V
  // 9 IX
  // 10 X
  // 40 XL
  // 50 L
  // 90 XC
  // 100 C
  // 400 CD
  // 500 D
  // 900 CM
  // 1000 M
  const units = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const dbUnits = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  const unit = Object.keys(units)
  const dbUnit = Object.keys(dbUnits)

  const reg = new RegExp(`(${dbUnit.join('|')})`, 'g')
  let num = 0

  s = s.replace(reg, (u) => {
    num += dbUnits[u]
    return ''
  })

  const reg2 = new RegExp(`(${unit.join('|')})`, 'g')
  s.replace(reg2, (u) => {
    num += units[u]
    return ''
  })

  return num
}
