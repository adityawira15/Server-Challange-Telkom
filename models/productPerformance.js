const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductPerformance = new Schema({
    name: String
});

module.exports = mongoose.model('ProductPerformance', ProductPerformance)