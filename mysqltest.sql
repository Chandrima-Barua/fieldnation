  SELECT user.user_id, CONCAT(user.first_name,' ',user.last_name) as name, AVG(correct) as average_correct, MAX(time_taken)as Test_take_time FROM user LEFT JOIN test_result ON user.user_id = test_result.user_id GROUP BY user.user_id;


Result:

  +---------+---------------+-----------------+---------------------+
| user_id | name          | average_correct | Test_take_time      |
+---------+---------------+-----------------+---------------------+
|       1 | Bob Sanders   |         66.0000 | 2012-09-05 16:22:11 |
|       2 | Dave Greggers |         97.0000 | 2012-09-15 11:27:51 |
|       3 | Susan Bowie   |         39.0000 | 2012-09-15 15:01:49 |
|       4 | Gary Anderson |            NULL | NULL                |
+---------+---------------+-----------------+---------------------+
