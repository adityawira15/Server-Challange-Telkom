const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BestTalentPerformance = new Schema({
    name: String,
    stream: {
        type: String,
        enum: ['Frontend', 'Backend']
    },
    pointBurn: Number,
    pointRemaining: Number,
    pointQueue: Number
});

module.exports = mongoose.model('BestTalentPerformance', BestTalentPerformance)