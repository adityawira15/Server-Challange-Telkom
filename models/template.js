const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Template = new Schema({
    name: String
});

module.exports = mongoose.model('Template', Template)