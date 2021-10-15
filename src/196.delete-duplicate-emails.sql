--
-- @lc app=leetcode id=196 lang=mysql
--
-- [196] Delete Duplicate Emails
--

-- @lc code=start
# Write your MySQL query statement below

delete p1
from Person as p1, Person as p2
where p1.Email = p2.Email and p1.Id > p2.Id
-- @lc code=end

