/*
 * @lc app=leetcode id=15 lang=rust
 *
 * [15] 3Sum
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums;
        nums.sort();
        //  value -> pos list
        let mut num_pos_map: HashMap<i32, Vec<usize>> = HashMap::new();

        for (idx, num) in nums.iter().enumerate() {
            match num_pos_map.get_mut(num) {
                Some(v) => {
                    v.push(idx);
                }
                None => {
                    num_pos_map.insert(*num, vec![idx]);
                }
            }
        }

        let mut three_sum_collection: Vec<[i32; 3]> = vec![];

        let nums: Vec<i32> = num_pos_map.iter().map(|x| *x.0).collect();

        for idx in 0..nums.len() {
            for jdx in idx..nums.len() {
                let n1 = nums[idx];
                let n2 = nums[jdx];

                if n1 == n2 && num_pos_map.get(&n1).unwrap().len() < 2 {
                    continue;
                }

                let look_up = 0 - (n1 + n2);

                match num_pos_map.get(&look_up) {
                    Some(v) => {
                        let pass = if n1 == look_up && n2 == look_up {
                            v.len() >= 3
                        } else if n1 == look_up || n2 == look_up {
                            v.len() >= 2
                        } else if n1 != look_up && n2 != look_up {
                            true
                        } else {
                            false
                        };

                        if pass {
                            let mut arr = [n1, n2, look_up];
                            arr.sort();
                            if !three_sum_collection.contains(&arr) {
                                three_sum_collection.push(arr);
                            }
                        }
                    }
                    None => continue,
                }
            }
        }

        let r = three_sum_collection.iter().map(|x| Vec::from(*x)).collect();

        r
    }
}

// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn three_sum() {
        let r = Solution::three_sum(vec![-1, 0, 1, 2, -1, -4]);
        let e = vec![vec![-1, -1, 2], vec![-1, 0, 1]];
        assert_eq!(e, r)
    }

    #[test]
    fn three_sum2() {
        let r = Solution::three_sum(vec![]);
        let e: Vec<Vec<i32>> = vec![];
        assert_eq!(e, r)
    }

    #[test]
    fn three_sum3() {
        let r = Solution::three_sum(vec![0]);
        let e: Vec<Vec<i32>> = vec![];
        assert_eq!(e, r)
    }

    #[test]
    fn three_sum4() {
        let r = Solution::three_sum(vec![0, 0, 0]);
        let e: Vec<Vec<i32>> = vec![vec![0, 0, 0]];
        assert_eq!(e, r)
    }

    #[test]
    fn three_sum5() {
        let r = Solution::three_sum(vec![0, 0, 0, 0]);
        let e: Vec<Vec<i32>> = vec![vec![0, 0, 0]];
        assert_eq!(e, r)
    }
}
