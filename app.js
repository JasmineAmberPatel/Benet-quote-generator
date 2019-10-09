const express = require('express');
const benetControllers = require('./controllers/quotes');

app.use(express.json());

app.post('/quotes', benetControllers.create);

module.exports = app;
