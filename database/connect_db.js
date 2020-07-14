const mysql = require('mysql');
const logger = require('../winston');
const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
connect.connect((err)=>{
    if (err) logger.error(err);
        else console.log("conneted");
})
module.exports = connect;