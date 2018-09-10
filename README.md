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
   * Starts with a menu"


## Built With

* Node.js
* JavaScript
* MYSQL Workbench

## Authors

* **Gregory Row** - *Initial work* - [rowgregory](https://github.com/rowgregory)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

