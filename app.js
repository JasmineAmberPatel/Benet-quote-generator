const express = require('express');
const quotesControllers = require('./controllers/quotes');
const app = express();

app.use(express.json());

app.post('/quotes', quotesControllers.create);

app.get('/quotes', quotesControllers.list);

module.exports = app;
