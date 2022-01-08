/*
 * @lc app=leetcode id=824 lang=rust
 *
 * [824] Goat Latin
 */

pub struct Solution {}

// @lc code=start
impl Solution {
  pub fn to_goat_latin(sentence: String) -> String {
    let vowels: Vec<char> = vec!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let words = sentence.split_whitespace();
    let mut result: String = String::new();
    let letter_a = String::from("a");

    let mut idx = 0;
    for word in words {
      let first = word.chars().next().unwrap();

      if !result.is_empty() {
        result.push(' ')
      }

      if vowels.contains(&first) {
        result.push_str(word);
        result.push_str("ma");
      } else {
        result.push_str(word.get(1..).unwrap());
        result.push(first);
        result.push_str("ma");
      };

      result.push_str(letter_a.repeat(idx + 1).as_str());

      idx = idx + 1;
    }

    return result;
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn to_goat_latin() {
    assert_eq!(
      "Imaa peaksmaaa oatGmaaaa atinLmaaaaa".to_string(),
      Solution::to_goat_latin("I speak Goat Latin".to_string())
    );
  }
}
