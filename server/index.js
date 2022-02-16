const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LogInSystem",
})


app.get('/', (req, res) => {
    res.send('Up and running')
})

app.listen(3001, () => {            //server port
    console.log("running on port 3001");
})