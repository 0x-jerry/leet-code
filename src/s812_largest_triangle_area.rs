/*
 * @lc app=leetcode id=812 lang=rust
 *
 * [812] Largest Triangle Area
 */

pub struct Solution {}

// @lc code=start
impl Solution {
    fn get_triangle_size(p1: Vec<i32>, p2: Vec<i32>, p3: Vec<i32>) -> f64 {
        return 0.5
            * (
                // 1
                p1[0] * (p2[1] - p3[1]) +
                // 2
                p2[0] * (p3[1] - p1[1]) +
                // 3
                p3[0] * (p1[1] - p2[1])
            )
            .abs() as f64;
    }

    pub fn largest_triangle_area(points: Vec<Vec<i32>>) -> f64 {
        let mut largest_area = 0.0;

        for idx1 in 0..(points.len() - 2) {
            for idx2 in idx1 + 1..(points.len() - 1) {
                for idx3 in idx2 + 1..points.len() {
                    let area = Solution::get_triangle_size(
                        points[idx1].clone(),
                        points[idx2].clone(),
                        points[idx3].clone(),
                    );

                    largest_area = if largest_area > area {
                        largest_area
                    } else {
                        area
                    };
                }
            }
        }

        return largest_area;
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn largest_triangle_area() {
        let points = vec![vec![1, 0], vec![0, 0], vec![0, 1]];
        assert_eq!(0.50000, Solution::largest_triangle_area(points));
    }

    #[test]
    fn largest_triangle_area2() {
        let points = vec![vec![4, 6], vec![6, 5], vec![3, 1]];
        assert_eq!(5.5, Solution::largest_triangle_area(points));
    }
}
