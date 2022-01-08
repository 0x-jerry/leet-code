/*
 * @lc app=leetcode id=832 lang=rust
 *
 * [832] Flipping an Image
 */

pub struct Solution {}
// @lc code=start
impl Solution {
  pub fn flip_and_invert_image(image: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut flip_and_invert_result: Vec<Vec<i32>> = vec![];

    for row in image {
      let len = row.len();
      let mut row_image = vec![0; len];
      for i in 0..len {
        let c = row[len - 1 - i];
        row_image[i] = if c == 0 { 1 } else { 0 };
      }
      flip_and_invert_result.push(row_image);
    }

    flip_and_invert_result
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn large_group_positions1() {
    assert_eq!(
      vec![vec![1, 0, 0], vec![0, 1, 0], vec![1, 1, 1],],
      Solution::flip_and_invert_image(vec![vec![1, 1, 0], vec![1, 0, 1], vec![0, 0, 0],])
    );
  }
}
