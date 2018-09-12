const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Performance = new Schema({
    name: String,
    stream: {
        type: String,
        enum: ['Frontend', 'Backend']
    },
    pointBurn: Number,
    pointRemaining: Number,
    pointQueue: Number
});

module.exports = mongoose.model('Performance', Performance)