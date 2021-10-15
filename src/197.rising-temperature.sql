--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--

-- @lc code=start
# Write your MySQL query statement below

select w1.id
from Weather w1, Weather w2
where w1.Temperature > w2.Temperature and TO_DAYS(w1.recordDate) = TO_DAYS(w2.recordDate) + 1
-- @lc code=end

