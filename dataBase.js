const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "food",
    password: "anusha086",
    port: "5432",
});

module.exports = pool;