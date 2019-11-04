const express = require('express');
const quotesControllers = require('./controllers/quotes');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/quotes', quotesControllers.create);

app.get('/quotes', quotesControllers.list);

module.exports = app;
