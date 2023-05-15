const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "find_my_uni",
  password: "reese"
});

module.exports = pool;