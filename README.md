# Bamazon

Bamazon is an Amazon-like storefront where users can purchase an item which then depletes the stock inventory from the MYSQL database.

## Getting Started

 * Clone repository
 * Run NPM install
 * Run command depending which mode you woule like to be on"
   * Customer - 'node customerBamazon.js'
   * Manager - 'node managerBamazon.js'
 * Run 'ctrl + c' to exit each mode

## JavaScript files

1. 'bamazonCustomer.js'
  * Prints the products to the store.
  * Prompts customer which produt they would like to purchase by ID number.
  * Asks for the quantity.
    * If there is sufficient amounf of the product in stock, it will return the toal for that purchase.
    * However, if there is not enough of the product in stock, it will tell the user to try again later and returns to view all               inventory.
    
2. 'bamazonManager.js'
  * Starts with a menu:
    * View All Inventory
    * View Low Inventory
    * Add to Inventory
    * Add New Product
     
   * If the manager selects `View All Inventory`, a complete list of the inventory is displayed with details.
   * If the manager selects `View Low Inventory`, a list of the products with less than five items in its stock quantity column.
   * If the manager selects `Add to Inventory`, it allows the manager to select a product and add inventory.
   * If the manager selects `Add New Product`, it allows the manager to add a new product to the store.
     
## Demo Videos

 * bamazonCustomer.js (https://youtu.be/4rlSLSu-vhA)
 * bamazonManager.js (https://youtu.be/nFAOAp5m2jk)
 
## Technologies Used

 * Node.js
 * JavaScript
 * Inquire NPM Package (https://www.npmjs.com/package/inquirer)
 * MYSQL NPM Package (https://www.npmjs.com/package/mysql)
 * Figlet NPM Package (https://www.npmjs.com/package/figlet)
 * Chalk NPM Package(https://www.npmjs.com/package/chalk)

## Prerequisites

 - Node.js - Download the latest version of Node https://nodejs.org/en/
 - Create a MYSQL database called 'Bamazon', reference schema.sql

## Built With

 * MySQL Workbench
 * Terminal/Gitbash

## Authors

 * **Gregory Row** - *Initial work* - [rowgregory](https://github.com/rowgregory)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

