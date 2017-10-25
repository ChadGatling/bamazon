DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("R/C Truck", "Toys", 20.75, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fancy Lamp", "Homegoods", 875.25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deluxe Pizza Oven", "Homegoods", 136.17, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Distressed Leather Jacket", "Clothing", 319.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Hero Action Figure", "Toys", 15.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Play Putty", "Toys", 7.68, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("20ft Floor Rug", "Homegoods", 212.48, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheap Vase", "Homegoods", 4.42, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's White Button Shirt", "Clothing", 32.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Expensive Ugly Pants", "Clothing", 472.13, 100);