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
        let nums = nums;
        //  value -> pos list
        let mut num_pos_map: HashMap<i32, Vec<usize>> = HashMap::new();
        let mut three_sum_collection: Vec<[i32; 3]> = vec![];

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

        for idx in 0..nums.len() {
            for jdx in (idx + 1)..nums.len() {
                let sum = nums[idx] + nums[jdx];
                let loop_up = 0 - sum;

                let hit = num_pos_map.get(&loop_up);

                if hit.is_some() {
                    let x = hit.unwrap().iter().find(|x| **x != idx && **x != jdx);
                    if x.is_some() {
                        let mut arr = [nums[idx], nums[jdx], loop_up];
                        arr.sort();

                        if !three_sum_collection.contains(&arr) {
                            three_sum_collection.push(arr);
                        }
                    }
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
        let e = vec![vec![-1, 0, 1], vec![-1, -1, 2]];
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
}
