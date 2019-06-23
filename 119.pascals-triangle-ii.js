/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let line = [1]

  if (rowIndex === 0) {
    return line
  }

  let lineRow = 1
  while (lineRow <= rowIndex) {
    line = fillTriangleNextLine(line)
    lineRow++
  }

  return line
}

/**
 *
 * @param {number[]} preLine
 * @returns {number[]}
 */
function fillTriangleNextLine(preLine) {
  const line = [1]

  for (let i = 0; i < preLine.length; i++) {
    const n = preLine[i]
    const m = preLine[i + 1] || 0

    line.push(m + n)
  }

  return line
}
