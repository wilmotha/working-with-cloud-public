const express = require('express');

// connects to api folder
const api = require('./api');

// add connections for database

const app = express();
const port = 8000;

app.use(express.json());


app.use('/', api);

app.use('*', (req, res) => {
   res.status(404).json({
       error: "Does not exist"
   });
});