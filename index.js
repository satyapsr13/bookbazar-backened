require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT||3000
const database=require("./config/database")
database();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))