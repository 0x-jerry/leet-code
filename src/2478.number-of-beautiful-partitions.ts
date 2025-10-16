/*
 * @lc app=leetcode id=2478 lang=typescript
 *
 * [2478] Number of Beautiful Partitions
 */

// @lc code=start
function beautifulPartitions(s: string, k: number, minLength: number): number {
  const parts = getAllBeautifulParts(s).map((idx, i, arr) => ({
    idx: idx,
    end: arr[i + 1] ?? s.length,
  }));

  if (parts.length < k) {
    return 0;
  }

  const dp: number[][] = new Array(parts.length)
    .fill(0)
    .map(() => Array(k - 1).fill(0));

  const maxCount = 10 ** 9 + 7;

  for (let kk = 0; kk < k; kk++) {
    for (let xi = 0; xi < parts.length; xi++) {
      if (kk === 0) {
        const len = parts[xi].end;
        dp[xi][kk] = len >= minLength ? 1 : 0;
        continue;
      }

      let count = 0;

      for (let x = 0; x < xi; x++) {
        const len = parts[xi].end - parts[x].end;

        if (len < minLength) {
          continue;
        }

        count += dp[x][kk - 1];
      }

      dp[xi][kk] = count % maxCount;
    }
  }

  return dp[parts.length - 1][k - 1];
}

function getAllBeautifulParts(s: string): number[] {
  let startIdx = -1;
  const parts: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (startIdx === -1) {
      if (isPrime(char)) {
        startIdx = i;
      } else {
        return [];
      }
    } else {
      if (!isPrime(char) && (!s[i + 1] || isPrime(s[i + 1]))) {
        parts.push(startIdx);
        startIdx = -1;
      }
    }
  }

  return startIdx === -1 ? parts : [];
}

function isPrime(n: string) {
  return n === "2" || n === "3" || n === "5" || n === "7";
}
// @lc code=end

describe("beautifulPartitions", () => {
  it("23542185131, 3, 2", () => {
    expect(beautifulPartitions("23542185131", 3, 2)).toBe(3);
  });

  it("23542185131, 3, 3", () => {
    expect(beautifulPartitions("23542185131", 3, 3)).toBe(1);
  });

  it("3312958, 3, 1", () => {
    expect(beautifulPartitions("3312958", 3, 1)).toBe(1);
  });

  it("783938233588472343879134266968, 4, 6", () => {
    expect(beautifulPartitions("783938233588472343879134266968", 4, 6)).toBe(4);
  });

  it("long text, 24, 2", () => {
    expect(
      beautifulPartitions(
        "7753639519183359148598823162755335682921461647796985255166979917649578972791819356618496239687361868933775339936875893219782348459522657159781118588765368954599285197845124455559747963186111993765269",
        24,
        2,
      ),
    ).toBe(616385996);
  });
});
