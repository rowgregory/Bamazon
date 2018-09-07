CREATE DATABASE Bamazon;
Use Bamazon;

CREATE TABLE products (
    item_id INTEGER(200) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ('Nintendo Switch', 'electronics', '300', '45'),
           ('Nike Air Max', 'clothing', '100', '65'),
           ('Sweet Baby Rays', 'food', '5', '30'),
           ('ASUS laptop', 'electronics', '1300', '10'),
           ('Strawberries', 'food', '4', '25'),
           ('Logitech Mouse', 'electronics', '30', '15'),
           ('Cocoa Puffs', 'food', '3', '20'),
           ('Dog collar', 'pet accessories', '10', '15'),
           ('HDMI chord', 'phone accessories', '3', '200'),
           ('skittles', 'foods', '12.50', '200'),
           ('Jungle Journey Poster', 'artwork', '15.00', '5')

