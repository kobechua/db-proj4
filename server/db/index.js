const { Pool } = require("pg");

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "law_firm",
    password : "5623",
    port : 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

