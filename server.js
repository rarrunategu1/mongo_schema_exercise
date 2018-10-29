const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());





const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log('You are now listening to ', port));