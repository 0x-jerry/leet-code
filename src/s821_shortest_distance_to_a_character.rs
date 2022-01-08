/*
 * @lc app=leetcode id=821 lang=rust
 *
 * [821] Shortest Distance to a Character
 */

pub struct Solution {}

// @lc code=start
impl Solution {
  pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
    let mut answer = vec![-1; s.len()];

    let mut idx = 0;
    let mut prev_char_idx = -1;

    for s_char in s.chars() {
      if s_char == c {
        answer[idx] = 0;

        if prev_char_idx < 0 {
          for i in 0..idx {
            answer[i] = (idx - i) as i32;
          }
        } else {
          let idx = idx as i32;
          let mid = (prev_char_idx + idx) / 2;

          for i in prev_char_idx..idx {
            answer[i as usize] = if i <= mid { i - prev_char_idx } else { idx - i }
          }
        }

        prev_char_idx = idx as i32;
      }

      idx = idx + 1;
    }

    if prev_char_idx != idx as i32 {
      for i in (prev_char_idx + 1) as usize..idx {
        answer[i] = i as i32 - prev_char_idx;
      }
    }

    return answer;
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test1() {
    assert_eq!(
      vec![3, 2, 1, 0],
      Solution::shortest_to_char("aaab".to_string(), 'b')
    );
  }

  #[test]
  fn test2() {
    assert_eq!(
      vec![3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
      Solution::shortest_to_char("loveleetcode".to_string(), 'e')
    );
  }

  #[test]
  fn test3() {
    assert_eq!(
      vec![2, 1, 0, 1],
      Solution::shortest_to_char("aaba".to_string(), 'b')
    );
  }
}
