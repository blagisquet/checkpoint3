const express = require('express');
const mysql = require('mysql');

const api = express();
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
})

const connection = mysql.createConnection({
  database: "wildcircus",
  host: "localhost",
  user: "root",
  password: "Bptst%988"
});

connection.connect((err) => {
  if(err) throw err;
  console.log("You're connected (bitch).");
});

api.get('/', (req, res) => {
  res.send('is working (bitch)');
});

api.listen(8000, (err) => {
  if(err) throw err;
  console.log('API is running (far far away)');
});

api.get('/artists', (req, res) => {
  connection.query('SELECT * FROM artists', (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("Result: " +result);
  });
});

api.get('/messages', (req, res) => {
  connection.query('SELECT * FROM messages', (err, result) => {
    if (err) throw err;
    res.header.send(result);
    console.log(result);
  });
});