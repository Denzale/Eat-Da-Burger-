const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Set the port of the application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.engine("handlenars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Snakeeater1998",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;

    }
})