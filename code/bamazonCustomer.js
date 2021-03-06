const inq   = require('inquirer');
const sql   = require('mysql');
const fig   = require('figlet');
const chalk = require('chalk');
const log   = console.log;


const con = sql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'SuperSecretPasswordHere',
    database: 'Bamazon'
})

fig.text('   BAMAZON', {
    font: 'block',
  }, function (err, data) {
  
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    log(data);
  
  
    begin();

});

const begin = () => {

    
    
    con.query(`SELECT * FROM products`, (err, res) => {
        if (err) throw err;

        


        for(var i = 0; i < res.length; i++){
            log(`ID: ${res[i].item_id} | Product: ${res[i].product_name} | Price: ${res[i].price} | Stock Quantity: ${res[i].stock_quantity}`);
        }
        
        inq.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the product you would like to purchase?',
                validate: (value) => {
                    if (value > res.length) {log(`\r\nSorry, not an ID`);} else {return true;}
                }
            },
            {
                type: 'input',
                name: 'qty',
                message: 'How would much would like to purchase?',        
            }
        ]).then(answer => {

            let whatToBuy = (answer.id)-1;      // which ID the user chose
            //log(whatToBuy);
            let howMuchToBuy = parseInt(answer.qty);    // the amount the user would like to purchase
            //log(howMuchToBuy);
            let grandTotal = parseFloat(((res[whatToBuy].price) * howMuchToBuy).toFixed(2));    // multiplies the amount youre buying with the price
            //log(grandTotal);

            // check to see if quantity is sufficient
            if(res[whatToBuy].stock_quantity >= howMuchToBuy) {
                // after purchase, updates quantity in products
                con.query("UPDATE products SET ? WHERE ?", [
                {stock_quantity: (res[whatToBuy].stock_quantity - howMuchToBuy)},
                {item_id: answer.id}
                ], function(err, res){
                    
                    if(err) throw err;
                    log(chalk.green.bold(`Success! Your total is $ ${grandTotal.toFixed(2)}. Your item(s) will be shipped to you in 3-5 business days.`));
                    rePrompt();
                });
            } else {
                log(`Sorry! Not enough in stock. Please try again later.\r\n-----------------------`);
                begin();   
            } 
        })
    })
}

const rePrompt = () => {
    inq.prompt([{
        type: 'list',
        name: 'add',
        message: 'Would you like to purchase another item?',
        choices: ['Yes', 'No']
    }]).then(answer => {
        switch (answer.add) {
            case 'Yes':
                begin();
                break
            case 'No':
                log(`Please Come Back Soon`);
                con.end();
                break
            default:
                log(`Goodbye`);
                con.end();
                break; 
        }
    })
}

