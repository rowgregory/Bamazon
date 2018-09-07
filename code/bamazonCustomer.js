const inq = require('inquirer');
const sql = require('mysql');
const log = console.log;

const con = sql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'SuperSecretPasswordHere',
    database: 'Bamazon'
})

const begin = () => {
    
    con.query(`SELECT * FROM products`, (err, res) => {
        if (err) throw err;

        log(`WELCOME TO BAMAZON\r\n---------------------------`);

        for(var i = 0; i < res.length; i++){
            log(`ID: ${res[i].item_id} | Product: ${res[i].product_name} | Price: ${res[i].price} | Stock Quantity: ${res[i].stock_quantity}`);
        }
        
        inq.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the product you would like to purchase?',
            },
            {
                type: 'input',
                name: 'qty',
                message: 'How would much would like to purchase?',
            }
        ]).then(function(answer){
            let whatToBuy = (answer.id)-1;
            //log(whatToBuy);
            let howMuchToBuy = parseInt(answer.qty);
            //log(howMuchToBuy);
            let grandTotal = parseFloat(((res[whatToBuy].price) * howMuchToBuy).toFixed(2));
            log(grandTotal);
        })
    })

    
}
begin();