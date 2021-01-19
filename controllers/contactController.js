const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Contact.create(req.body)
        .then(dbContact => res.json(dbContact))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req,res) {
        db.Contact.find(req.query)
        .then(dbContact => res.json(dbContact))
        .catch(err => res.status(422).json(err));
    }
};