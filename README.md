# Project Title

Bamazon is an Amazon-like storefront where users can purchase an item which then depletes the stock inventory from the MYSQL database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Need Node.js
MYSQL Workbench


## Getting Started

Clone repository
Run NPM install
Run command depending which mode you woule like to be on"
  * Customer - 'node customerBamazon.js'
  * Manager - 'node managerBamazon.js'
Run 'ctrl + c' to exit each mode

### What each JavaScript Does

1. 'bamazonCustomer.js'
  * Prints the products to the store.
  * Prompts customer which produt they would like to purchase by ID number.
  * Asks for the quantity.
    * If there is sufficient amounf of the product in stock, it will return the toal for that purchase.
    * However, if there is not enough of the product in stock, it will tell the user to try again later and returns to view all               inventory.
    
2. 'managerCustomer.js'
   * Starts with a menu:
     * View All Inventory
     * View Low Inventory
     * Add to Inventory
     * Add New Product
     
    * If the manager selects `View All Inventory`, a complete list of the inventory is displayed with details.
    * If the manager selects `View Low Inventory`, a list of the products with less than five items in its stock quantity column.
    * If the manager selects `Add to Inventory`, it allows the manager to select a product and add inventory.
    * If the manager selects `Add New Product`, it allows the manager to add a new product to the store.
     


## Built With

* Node.js
* JavaScript
* MySQL Workbench
* Terminal/Gitbash

## Authors

* **Gregory Row** - *Initial work* - [rowgregory](https://github.com/rowgregory)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

