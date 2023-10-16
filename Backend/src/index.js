require("dotenv").config();

const express = require("express");
const mysql = require("mysql")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const salt = 10;

const PORT = process.env.SERVER_PORT || "3000";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`firstName` , `lastName` , `email` , `contact` , `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toSting(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"})
    })
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.contact,
        req.body.password,
    ]
})

app.listen(PORT, () => {
    console.log(`Server is running on port ` + PORT)
})