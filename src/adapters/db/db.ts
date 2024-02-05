import pgPromise from 'pg-promise';

const pg = pgPromise()
const db = pg({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
})

export default db