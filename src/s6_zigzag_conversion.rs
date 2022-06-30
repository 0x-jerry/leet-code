/*
 * @lc app=leetcode id=6 lang=rust
 *
 * [6] Zigzag Conversion
 */

pub struct Solution {}

// @lc code=start
impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        if num_rows <= 1 {
            return s;
        }

        let num_rows = num_rows as usize;

        let mut result: Vec<Vec<char>> = vec![vec![]; num_rows];

        let line_size = 2 * num_rows - 2;

        let mut idx = 0;
        s.chars().for_each(|c| {
            let offset = idx % line_size;
            let row = if offset >= num_rows {
                line_size - offset
            } else {
                offset
            };

            result[row].push(c);

            idx += 1;
        });

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
