const mongoose = require('mongoose')

const sprintSchema = new mongoose.Schema({
    initDate : {
        type : Date,
        required : true
    },
    finallyDate : {
        type : Date,
        required : true
    },
    tasks : [{
        type: mongoose.Schema.Types.ObjectId, ref: "Task", default: []
    }]
})

const sprint = mongoose.model('Sprints', sprintSchema)

module.exports = sprint