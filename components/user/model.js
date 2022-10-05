const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    password: String,
    description: String,
    created: Date,
    modified: Date,
});

const Model = model('user', userSchema);

module.exports = Model;