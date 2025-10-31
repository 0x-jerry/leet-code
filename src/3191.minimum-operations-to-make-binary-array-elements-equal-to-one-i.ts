/*
 * @lc app=leetcode id=3191 lang=typescript
 *
 * [3191] Minimum Operations to Make Binary Array Elements Equal to One I
 */

// @lc code=start
function minOperations(nums: number[]): number {
  let opCount = 0;

  let i = 0;
  for (; i <= nums.length - 3; i++) {
    const n = nums[i];
    if (n === 0) {
      flipAt(i);
      opCount++;
    }
  }

  for (; i < nums.length; i++) {
    const n = nums[i];
    if (n === 0) {
      return -1;
    }
  }

  return opCount;

  function flipAt(idx: number) {
    for (let i = idx; i < idx + 3; i++) {
      nums[i] = nums[i] === 0 ? 1 : 0;
    }
  }
}
// @lc code=end

describe("Minimum Operations to Make Binary Array Elements Equal to One I", () => {
  it("nums = [0,1,1,1,0,0]", () => {
    const nums = [0, 1, 1, 1, 0, 0];
    expect(minOperations(nums)).toBe(3);
  });

  it("nums = [0,1,1,1]", () => {
    const nums = [0, 1, 1, 1];
    expect(minOperations(nums)).toBe(-1);
  });
});
