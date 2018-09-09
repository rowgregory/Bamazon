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

const start = () => {
    inq.prompt([{
       type:'list',
       name: 'duties',
       message: 'What would you like to do?',
       choices: ['View All Inventory', 'View Low Inventory', 'Add to Inventory', 'Add New Products']
    }]).then(answers => {
        switch (answers.duties){
            case 'View All Inventory': viewProducts();
            break;
        }
                
    })
}

const viewProducts = () => {
    log(`~~~~~~~~~~~~~Viewing Products~~~~~~~~~~~~`);

    con.query(`SELECT * FROM products`, function(err, res){
        if(err) throw err;

        for(var i = 0; i < res.length; i++){
            log(`ID: ${res[i].item_id} | Product: ${res[i].product_name} | Price: ${res[i].price} | Stock Quantity: ${res[i].stock_quantity}`);
        }
        start();
    });
}
start();