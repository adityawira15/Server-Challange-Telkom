const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WorkIntensity = new Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('WorkIntensity', WorkIntensity)