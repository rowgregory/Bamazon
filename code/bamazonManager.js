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
            case 'View Low Inventory': lowInventory();
            break;
            case 'Add to Inventory': addToInventory();
            break;
            case 'Add New Products': addNewProduct();
            break;
            default: log(`There must be an error`); con.end();
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

const lowInventory =() => {
    log(`~~~~~~~~~~~~~~~~Low Inventory~~~~~~~~~~~~~~~~`);

    con.query(`SELECT * FROM products`, function(err, res){
        if(err) throw err;

        for(var i = 0; i < res.length; i++){
            if(res[i].stock_quantity <= 5){
            log(`ID: ${res[i].item_id} | Product: ${res[i].product_name} | Price: ${res[i].price} | Stock Quantity: ${res[i].stock_quantity}`);
            }
        }
    start();
    });
}

const addToInventory = () => {
    log(`~~~~~~~~~~~~~~~~Add to Inventory~~~~~~~~~~~~~~~~`);

    con.query(`SELECT * FROM products`, function(err, res){
        if(err) throw err;
        let productArray = [];
        for(var i = 0; i < res.length; i++){
            productArray.push(res[i].product_name);
        }
        inq.prompt([{
            type: 'list',
            name: 'product',
            choices: productArray,
            message: 'Which ID would you like to add inventory?'
        },{
            type: 'input',
            name: 'qty',
            message: 'How much would you like to add?',
            validate: function(value){
                if(isNaN(value) === false){return true;}
                else {return false;}
            }
        }]).then(answer => {
            var currentQty;
            for(var i = 0; i < res.length; i++){
                if(res[i].product_name === answer.product){
                currentQty = res[i].stock_quantity;
                }
            }
            con.query(`UPDATE products SET ? WHERE ?`, [
                {stock_quantity: currentQty + parseInt(answer.qty)},
                {product_name: answer.product}
            ], function(err, res){
                if (err) throw err;
                log(`The quantity was updated`);
                start();
            });
        })
    });
}

const addNewProduct = () => {
    log(`~~~~~~~~~~~~~~~~Add to Inventory~~~~~~~~~~~~~~~~`);

    inq.prompt([{
            name:'name',
            type:'input',
            message:'Enter the name of the product you would like to add'
        },{
            name:'department',
            type: 'input',
            message:'What department would you like the product to belong in?'
        },{
            name:'price',
            type:'input',
            message:'What would you like the price to be set at?'
        },{
            name: 'qty',
            type:'input',
            message:'How many would you like to add?'
        }
    ]).then(answer => {
        log(answer);
        con.query(`INSERT INTO products SET ?`, 
        {
            product_name: answer.name,
            department_name: answer.department,
            price: answer.price,
            stock_quantity: answer.qty
        }, (err, res) => {
            if(err) throw err;
            let name = answer.name;
            log(`You added ${name}`);
            anotherTask();
    
        });
    }).catch(err => {
        if (err) throw err;
    });
}

const anotherTask = () => {
    inq.prompt([
        {
            name:'answer',
            type:'list',
            message:'Is there anything else I can help you with?',
            choices:['Yes','No']
        }
    ]).then(answers => {
        switch (answers.answer){
            case 'Yes': start();
            break;
            case 'No': log(`Enjoy the rest of your day!`); con.end();
            break;
            default: con.end();
            break;
        }

    })
}
start();

