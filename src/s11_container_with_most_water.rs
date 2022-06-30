/*
 * @lc app=leetcode id=11 lang=rust
 *
 * [11] Container With Most Water
 */
pub struct Solution;

// @lc code=start

#[derive(Debug)]
struct Col {
    pub height: i32,
    pub pos: usize,
}

impl Col {
    fn new(height: i32, pos: usize) -> Self {
        Self { height, pos }
    }
}

fn col_container_area(left_col: &Col, right_col: &Col) -> i32 {
    left_col.height.min(right_col.height) * (right_col.pos - left_col.pos) as i32
}

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut right_p = height.len() - 1;
        let mut left_p = 0;

        let mut left_col = Col::new(height.first().unwrap().clone(), 0);
        let mut right_col = Col::new(height.last().unwrap().clone(), height.len() - 1);
        let mut area_max = col_container_area(&left_col, &right_col);

        let mut is_search_left = left_col.height < right_col.height;

        while left_p < right_p {
            if is_search_left {
                left_p += 1;
                let h = height[left_p];

                if h > left_col.height {
                    left_col.height = h;
                    left_col.pos = left_p;
                } else {
                    continue;
                }
            } else {
                right_p -= 1;

                let h = height[right_p];

                if h > right_col.height {
                    right_col.height = h;
                    right_col.pos = right_p;
                } else {
                    continue;
                }
            }

            is_search_left = left_col.height < right_col.height;
            let area = col_container_area(&left_col, &right_col);

            area_max = area_max.max(area);
        }

        area_max
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn container_with_most_water() {
        let r = Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]);
        let e = 49;
        assert_eq!(e, r)
    }

    #[test]
    fn container_with_most_water1() {
        let r = Solution::max_area(vec![1, 1]);
        let e = 1;
        assert_eq!(e, r)
    }

    #[test]
    fn container_with_most_water2() {
        let r = Solution::max_area(vec![2, 3, 10, 5, 7, 8, 9]);
        let e = 36;
        assert_eq!(e, r)
    }

    #[test]
    fn container_with_most_water3() {
        let r = Solution::max_area(vec![2, 3, 4, 5, 18, 17, 6]);
        let e = 17;
        assert_eq!(e, r)
    }
}
