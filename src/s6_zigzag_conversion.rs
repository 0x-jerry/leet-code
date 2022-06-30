/*
 * @lc app=leetcode id=6 lang=rust
 *
 * [6] Zigzag Conversion
 */

pub struct Solution {}

// @lc code=start
use std::iter::FromIterator;

impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        if num_rows <= 1 {
            return s;
        }

        let num_rows = num_rows as usize;
        let len = s.len();

        let chars = Vec::from_iter(s.chars());
        let mut result: Vec<Vec<char>> = vec![vec![]; num_rows];

        let line_size = 2 * num_rows - 2;

        for idx in 0..len {
            let offset = idx % line_size;
            let row = if offset >= num_rows {
                line_size - offset
            } else {
                offset
            };

            result[row].push(chars[idx])
        }

        // ---
        let mut r = String::new();

        for row in result {
            for c in row {
                r.push(c)
            }
        }
        return r;
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn zigzag_conversion() {
        let r = Solution::convert(String::from("PAYPALISHIRING"), 3);
        assert_eq!(String::from("PAHNAPLSIIGYIR"), r)
    }

    #[test]
    fn zigzag_conversion2() {
        let r = Solution::convert(String::from("PAYPALISHIRING"), 4);
        assert_eq!(String::from("PINALSIGYAHRPI"), r)
    }

    #[test]
    fn zigzag_conversion3() {
        let r = Solution::convert(String::from("A"), 1);
        assert_eq!(String::from("A"), r)
    }
}
