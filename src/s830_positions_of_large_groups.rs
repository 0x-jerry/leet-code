/*
 * @lc app=leetcode id=830 lang=rust
 *
 * [830] Positions of Large Groups
 */
pub struct Solution {}

// @lc code=start
impl Solution {
  pub fn large_group_positions(s: String) -> Vec<Vec<i32>> {
    let mut large_groups: Vec<Vec<i32>> = vec![];

    let mut pre_char = s.chars().next().unwrap();
    let mut pre_idx = 0;
    let mut count = 0;
    let mut idx = 0;

    for c in s.chars() {
      if c == pre_char {
        idx = idx + 1;
        count = count + 1;
        continue;
      } else {
        if count >= 3 {
          large_groups.push(vec![pre_idx, idx - 1]);
        }

        count = 1;
        pre_char = c;
        pre_idx = idx;

        idx = idx + 1;
      }
    }

    if count >= 3 {
      large_groups.push(vec![pre_idx, idx - 1]);
    }

    return large_groups;
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn large_group_positions1() {
    assert_eq!(
      vec![vec![3, 6]],
      Solution::large_group_positions("abbxxxxzzy".to_string())
    );
  }

  #[test]
  fn large_group_positions2() {
    let answer: Vec<Vec<i32>> = vec![];
    assert_eq!(answer, Solution::large_group_positions("abc".to_string()));
  }

  #[test]
  fn large_group_positions3() {
    let answer: Vec<Vec<i32>> = vec![vec![3, 5], vec![6, 9], vec![12, 14]];
    assert_eq!(
      answer,
      Solution::large_group_positions("abcdddeeeeaabbbcd".to_string())
    );
  }

  #[test]
  fn large_group_positions4() {
    let answer: Vec<Vec<i32>> = vec![vec![0, 2]];
    assert_eq!(answer, Solution::large_group_positions("aaa".to_string()));
  }
}
