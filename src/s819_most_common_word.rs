/*
 * @lc app=leetcode id=819 lang=rust
 *
 * [819] Most Common Word
 */

pub struct Solution {}

// @lc code=start

use std::collections::HashMap;

impl Solution {
  pub fn most_common_word(paragraph: String, banned: Vec<String>) -> String {
    let paragraph = paragraph.to_lowercase();

    let words = paragraph.split(|n| !char::is_alphabetic(n));

    let mut collections: HashMap<&str, i32> = HashMap::new();

    for word in words {
      if word.trim().is_empty() {
        continue;
      }

      let count = if collections.contains_key(word) {
        collections[&word]
      } else {
        1
      };

      collections.insert(word, count + 1);
    }

    let mut most_word = String::from("");
    let mut most_word_count: i32 = 0;

    for en in collections {
      if !banned.iter().any(|n| n == en.0) && most_word_count < en.1 {
        most_word_count = en.1;
        most_word = String::from(en.0);
      }
    }

    return most_word;
  }
}
// @lc code=end

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn most_common_word() {
    let paragraph = "a.".to_string();
    let banned = vec![];
    assert_eq!(
      "a".to_string(),
      Solution::most_common_word(paragraph, banned)
    );
  }

  #[test]
  fn most_common_word2() {
    let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.".to_string();
    let banned = vec!["hit".to_string()];
    assert_eq!(
      "ball".to_string(),
      Solution::most_common_word(paragraph, banned)
    );
  }
}
