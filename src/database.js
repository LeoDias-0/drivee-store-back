import pg from "pg";

const {Pool} = pg;

const connection = new Pool({
    user: 'postgres',
    password: '123455',
    host: 'localhost',
    port: 5432,
    database: 'drivee_store'
})

export default connection;