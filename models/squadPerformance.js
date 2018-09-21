const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SquadPerformance = new Schema({
    name: String
});

module.exports = mongoose.model('SquadPerformance', SquadPerformance)