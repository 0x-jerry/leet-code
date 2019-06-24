/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const days = prices.length
  if (days <= 1) {
    return 0
  }

  const maxProfitWhenBuy = new Array(days)
  const maxProfitWhenSell = new Array(days)

  maxProfitWhenBuy[0] = -prices[0]
  maxProfitWhenSell[0] = 0

  for (let i = 1; i < days; i++) {
    const price = prices[i]

    maxProfitWhenBuy[i] = Math.max(maxProfitWhenBuy[i - 1], maxProfitWhenSell[i - 1] - price)
    maxProfitWhenSell[i] = Math.max(maxProfitWhenSell[i - 1], maxProfitWhenBuy[i - 1] + price)
  }

  return maxProfitWhenSell[days - 1]
}
