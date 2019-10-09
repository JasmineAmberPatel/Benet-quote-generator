const Quotes = require('../models/quotes');

exports.create = (req, res) => {
    const quotes = new Quotes({
        quote: req.body.quote,
    });
    quote.save().then(() => {
        res.status(201).json(artist);
    });
};

