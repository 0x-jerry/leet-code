/*
 * @lc app=leetcode id=836 lang=rust
 *
 * [836] Rectangle Overlap
 */

pub struct Solution {}
// @lc code=start

fn in_range(x: i32, x1: i32, x2: i32) -> bool {
  x1 < x && x < x2
}

impl Solution {
  fn is_in_rectangle(x: i32, y: i32, rect: Vec<i32>) -> bool {
    return rect[0] < x && x < rect[2] && rect[1] < y && y < rect[3];
  }

  pub fn is_rectangle_overlap(rec1: Vec<i32>, rec2: Vec<i32>) -> bool {
    let r1x1 = rec1[0];
    let r1y1 = rec1[1];
    let r1x2 = rec1[2];
    let r1y2 = rec1[3];

    let r2x1 = rec2[0];
    let r2y1 = rec2[1];
    let r2x2 = rec2[2];
    let r2y2 = rec2[3];

    let is_intersection = in_range(r1x1, r2x1, r2x2) && in_range(r2y1, r1y1, r1y2)
      || in_range(r1x1, r2x1, r2x2) && in_range(r2y2, r1y1, r1y2)
      || in_range(r1x2, r2x1, r2x2) && in_range(r2y1, r1y1, r1y2)
      || in_range(r1x2, r2x1, r2x2) && in_range(r2y2, r1y1, r1y2);

    return is_intersection
      || Solution::is_in_rectangle((r1x1 + r1x2) / 2, (r1y1 + r1y2) / 2, rec2.clone())
      || Solution::is_in_rectangle((r2x1 + r2x2) / 2, (r2y1 + r2y2) / 2, rec1.clone());
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn is_rectangle_overlap() {
    assert_eq!(
      Solution::is_rectangle_overlap(vec![0, 0, 2, 2], vec![1, 1, 3, 3]),
      true,
    );
  }

  #[test]
  fn is_rectangle_overlap1() {
    assert_eq!(
      Solution::is_rectangle_overlap(vec![0, 0, 1, 1], vec![1, 0, 2, 1]),
      false,
    );
  }

  #[test]
  fn is_rectangle_overlap2() {
    assert_eq!(
      Solution::is_rectangle_overlap(vec![7, 8, 13, 15], vec![10, 8, 12, 20]),
      true,
    );
  }

  #[test]
  fn is_rectangle_overlap3() {
    assert_eq!(
      Solution::is_rectangle_overlap(vec![-526, -216, 109, 495], vec![-211, -777, 630, -18]),
      true,
    );
  }
}
