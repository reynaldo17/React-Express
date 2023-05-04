const POOL = require('pg').Pool

const pool = new POOL({
    user:'me',
    host:'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})

console.log(pool)
