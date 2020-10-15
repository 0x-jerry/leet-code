--
-- @lc app=leetcode id=183 lang=mysql
--
-- [183] Customers Who Never Order
--

-- @lc code=start
# Write your MySQL query statement below

select Name as Customers
from Customers left join Orders
on Customers.Id = Orders.CustomerId
where Orders.Id is Null
-- @lc code=end

