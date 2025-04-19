const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description : {
        type : String,
        default: ''
    },
    state: {
        type : String,
        enum : ['pendiente', 'en_progreso', 'completado'],
        default: 'pendiente'
    },
    limitDate : {
        type: Date,
        required: true,
    },
})

const task = mongoose.model('Task', taskSchema)

module.exports = task

