const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Denik3174389",
  host: "localhost",
  post: 5432,
  database: "something_strange"
})

module.exports = pool;