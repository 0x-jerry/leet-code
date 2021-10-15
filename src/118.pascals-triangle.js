/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  /**
   * @type {number[][]}
   */
  const triangles = new Array(numRows).fill([])

  for (let i = 0; i < triangles.length; i++) {
    triangles[i] = i === 0 ? [1] : fillTriangleNextLine(triangles[i - 1])
  }

  return triangles
}

/**
 *
 * @param {number[]} preLine
 * @returns {number[]}
 */
function fillTriangleNextLine (preLine) {
  const line = [1]

  for (let i = 0; i < preLine.length; i++) {
    const n = preLine[i]
    const m = preLine[i + 1] || 0

    line.push(m + n)
  }

  return line
}
