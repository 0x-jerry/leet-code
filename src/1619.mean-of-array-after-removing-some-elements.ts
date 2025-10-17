function trimMean(arr: number[]): number {
  const removeLen = ~~(arr.length * 0.05)

  let min: number[] = []
  let max: number[] = []

  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    sum += n

    min = [...min, n].sort((a, b) => a - b).slice(0, removeLen)
    max = [...max, n].sort((a, b) => b - a).slice(0, removeLen)
  }

  return toPrecision((sum - sumOf(min) - sumOf(max)) / (arr.length - 2 * removeLen), 5)

  function sumOf(arr: number[]) {
    return arr.reduce((pre, cur) => pre + cur, 0)
  }

  function toPrecision(x: number, n: number) {
    const xx = 10 ** n
    return Math.round(x * xx) / xx
  }
}
