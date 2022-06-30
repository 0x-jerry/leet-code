/*
 * @lc app=leetcode id=8 lang=rust
 *
 * [8] String to Integer (atoi)
 */

pub struct Solution;

// @lc code=start

fn overflow_value(op: i32) -> i32 {
    if op == -1 {
        i32::MIN
    } else {
        i32::MAX
    }
}

fn is_overflow(op: i32, num: i64) -> bool {
    let n = op as i64 * num;

    n >= i32::MAX as i64 || (n <= i32::MIN as i64)
}

impl Solution {
    pub fn my_atoi(s: String) -> i32 {
        let mut parsed = String::new();

        let mut op = 0i32;
        let mut ignore_white_space_done = false;

        let i32_len = i32::MAX.to_string().len();

        for c in s.chars() {
            // trim left
            if !ignore_white_space_done {
                if c == ' ' {
                    continue;
                } else {
                    ignore_white_space_done = true;
                }
            }

            if op == 0 {
                if c == '-' {
                    op = -1;
                    continue;
                } else if c == '+' {
                    op = 1;
                    continue;
                }
                op = 1;
            }

            if c.is_numeric() {
                if parsed.len() == 0 && c == '0' {
                    continue;
                }

                parsed.push(c);

                if parsed.len() > i32_len {
                    break;
                };
            } else {
                break;
            }
        }

        let mut num: i64 = 0;

        let mut idx = 0;

        for c in parsed.chars().rev() {
            let digit = c.to_digit(10).unwrap() as i64;

            num += digit * 10i64.pow(idx);

            if is_overflow(op, num) {
                return overflow_value(op);
            }

            idx += 1;
        }

        (num * op as i64) as i32
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn string_to_integer() {
        let r = Solution::my_atoi(String::from("42"));
        let e = 42;
        assert_eq!(e, r)
    }

    #[test]
    fn string_to_integer2() {
        let r = Solution::my_atoi(String::from("   -42"));
        let e = -42;
        assert_eq!(e, r)
    }

    #[test]
    fn string_to_integer3() {
        let r = Solution::my_atoi(String::from("4193 with words"));
        let e = 4193;
        assert_eq!(e, r)
    }

    #[test]
    fn string_to_integer4() {
        let r = Solution::my_atoi(String::from("-91283472332"));
        let e = -2147483648;
        assert_eq!(e, r)
    }

    #[test]
    fn string_to_integer5() {
        let r = Solution::my_atoi(String::from("10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000522545459"));
        let e = 2147483647;
        assert_eq!(e, r)
    }

    #[test]
    fn string_to_integer6() {
        let r = Solution::my_atoi(String::from("  0000000000012345678"));
        let e = 12345678;
        assert_eq!(e, r)
    }
}
