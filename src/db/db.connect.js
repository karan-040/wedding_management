import pg from "pg";

const db = new pg.Client({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOSTNAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
})

export default db;