const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host:process.env.MYSQP_HOST,
    user:process.env.MYSQP_USER,
    password:process.env.MYSQP_PASSWORD,
    database:process.env.MYSQP_DB
});

module.exports = connection