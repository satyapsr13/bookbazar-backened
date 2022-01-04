require("dotenv").config();
const express = require('express')
const app = express()
const session = require("express-session");
const port = process.env.PORT || 3000
const database = require("./config/database")
database();
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

// app.use("/auth/google", require("./middleware/passport/google"));
app.use(express.json());
// app.use("/auth", require("./routes/user.js"));
app.use("/book", require("./routes/book.js"));
app.get('/a', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))