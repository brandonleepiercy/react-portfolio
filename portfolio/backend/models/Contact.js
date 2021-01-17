const mongoose = require('mongoose');
require ('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = "Email provided is an invalid email address";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: {
        type: mongoose.SchemaTypes.Email
    },
    note: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;