/*
 * @lc app=leetcode id=12 lang=rust
 *
 * [12] Integer to Roman
 */

pub struct Solution;

// @lc code=start
use std::ops::Add;

fn convert_roman_num(n: i32, roman_nums: &[char; 3]) -> String {
    let mut s = String::new();

    if n < 4 {
        for _ in 0..n {
            s.push(roman_nums[0]);
        }
    } else if n == 4 {
        s.push(roman_nums[0]);
        s.push(roman_nums[1]);
    } else if n == 5 {
        s.push(roman_nums[1]);
    } else if n < 9 {
        s.push(roman_nums[1]);
        for _ in 0..(n - 5) {
            s.push(roman_nums[0]);
        }
    } else if n == 9 {
        s.push(roman_nums[0]);
        s.push(roman_nums[2]);
    }

    s
}

const ROMAN_NUMS: [char; 9] = ['I', 'V', 'X', 'L', 'C', 'D', 'M', ' ', ' '];

impl Solution {
    pub fn int_to_roman(num: i32) -> String {
        let mut num = num;

        let mod_value = 10;

        let mut offset = 0;

        let mut roman_nums = String::new();

        while num > 0 {
            let p = num % mod_value;

            let roman_chars = [
                ROMAN_NUMS[offset * 2],
                ROMAN_NUMS[offset * 2 + 1],
                ROMAN_NUMS[offset * 2 + 2],
            ];

            let roman_s = convert_roman_num(p, &roman_chars);

            roman_nums = roman_s.add(&roman_nums);

            num /= mod_value;
            offset += 1;
        }

        roman_nums
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn integer_to_roman() {
        let r = Solution::int_to_roman(3);
        let e = String::from("III");
        assert_eq!(e, r)
    }

    #[test]
    fn integer_to_roman2() {
        let r = Solution::int_to_roman(58);
        let e = String::from("LVIII");
        assert_eq!(e, r)
    }

    #[test]
    fn integer_to_roman3() {
        let r = Solution::int_to_roman(1994);
        let e = String::from("MCMXCIV");
        assert_eq!(e, r)
    }
}
