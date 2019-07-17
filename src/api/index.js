const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('../db');

const api = express();
api.use(bodyParser.json());
api.use(cors({ origin: '*' }));
// api.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// })

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
    res.send(result);
    console.log(result);
  });
});

api.post('/messages', (req,res)=>{
  const sendMessage = req.body;
  connection.query(
    `INSERT INTO messages (name, email, message) VALUES ('${sendMessage.name}','${sendMessage.email}','${sendMessage.datMessage}')`,
    (err, result) => {
          if (err) {
            console.log(err)
          } else {
            res.sendStatus(200)
          }
        });
});