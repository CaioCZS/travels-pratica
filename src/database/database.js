import pg from "pg"

const { Pool } = pg
const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "caio",
  password: "210204",
  database: "travels",
})

export default db
