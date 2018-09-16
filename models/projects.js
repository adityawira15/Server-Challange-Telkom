const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Project = new Schema({
    name: String,
    unit: String,
    stakeHolder: String,
    sprint: Number,
    status: {
        type: String,
        enum: ['Complete', 'Rejected', 'On Going', 'In Queue']
    },
    description: String,
    starDate: Date,
    endDate: Date

});

module.exports = mongoose.model('Project', Project)