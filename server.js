const express = require('express');
const cors = require('cors');

const app = express();
const mysql = require('mysql');
const nodemon = require('nodemon');

const db = mysql.createPool( {
    host: "localhost",
    user: "CACORP\pantdee",
    password: "",
    database: "todomanager",

})
app.use(cors());

app.get('/tasks', (req, res)=> {
    const sqlInsert = "INSERT INTO Tasks (Task ID , Task Name) VALUES (2, 'Take a shower.');"
    db.query(sqlInsert, (err , result) => {
    res.send('List of all tasks till now....')
    })
   
});


app.get('/addTask', (req , res) => {
    res.send("You can add your task.")
})

app.get('/deleteTask',(req, res) => {
    res.send('Delete Task...')
})

app.listen(4000,() => {
    console.log("Running on port 4000.....")

})