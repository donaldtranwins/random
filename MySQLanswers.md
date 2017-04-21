# MySQL
### Advanced Query Challenge
1. Select all purchases made after february 1st
>`SELECT * FROM purchases 
  WHERE added >= '2016-02-01'`
2. Select all purchases made after february 1st that are less than $200 total
>`SELECT * FROM purchases 
  WHERE added>='2016-02-01' 
  AND price<200`
3. Select all purchases made after february 1st that are more than $200 total, order it by descending value (ie $200 comes first, then $150, then $75, etc)
>`SELECT * FROM purchases 
  WHERE added>='2016-02-01' 
  AND price>200 
  ORDER BY price DESC`
4. Select all purchases, join the customer table so we can also see the customer email and family_name
>`SELECT p.*, family_name, email 
  FROM customers AS c 
  JOIN purchases AS p
  ON c.ID = p.customers_id`
5. Select all purchases, join the items table so we can see the item name and unit price
>`SELECT p.*, i.name, i.price AS unit_price
  FROM items as i
  JOIN purchases AS p 
  ON i.ID = p.item_id`
6. Select all purchases, group them by the customer that bought them
>`SELECT *
  FROM purchases
  ORDER BY customers_id ASC`
7. Select the sum of all the purchases
>`SELECT SUM(price)
  FROM purchases`
8. Select the sum of all the purchases that were made by each customer
>`SELECT SUM(price)
  FROM purchases`
9. Select the sum of all the purchases, group them by each month (look up mysql Month and Year)
>`SELECT MONTH(added) AS month, SUM(price) AS sum
  FROM purchases
  GROUP BY month`

>`SELECT EXTRACT( MONTH FROM added) AS month, SUM(price) AS sum
  FROM purchases
  GROUP BY month`
10. Select the total number of each item bought, grouped by item type.  
For example, how many shirts were bought, how many pants were bought, how many shoes were bought
>`SELECT type, COUNT(type) AS purchased FROM items
  JOIN purchases ON items.ID=purchases.item_id
  GROUP BY type`
11. Select the total number of each item bought, grouped by month and then by type.  
I want to know how many of each type of item was bought in each month
>`SELECT COUNT(type) AS purchased, MONTH(added) AS month, type FROM items
  JOIN purchases ON items.ID=purchases.item_id
  GROUP BY type`