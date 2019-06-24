/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 * Dynamic programing problem
 * 
 * profit[n] = profit[n - 1] + prices[i] - prices[i - 1]
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const maxLen = prices.length

  let max = 0
  let yesterdayMaxProfit = max
  let currentDayMaxProfit = max
  let sellPrice = 0
  let buyPrice = 0

  for (let day = 1; day < maxLen; day++) {
    sellPrice = prices[day]
    buyPrice = prices[day - 1]

    currentDayMaxProfit = Math.max(0, yesterdayMaxProfit + sellPrice - buyPrice)
    yesterdayMaxProfit = currentDayMaxProfit

    max = Math.max(currentDayMaxProfit, max)
  }

  return max
}
