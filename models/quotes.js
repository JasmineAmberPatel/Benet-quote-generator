const mongoose = require('mongoose');
const {  Schema } = require('mongoose');

const quotesSchema = new Schema({
    quote: String,
});

const Quote = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;