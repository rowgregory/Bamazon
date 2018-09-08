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