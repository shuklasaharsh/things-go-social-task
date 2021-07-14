
const chalk = require('chalk')

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        trim: true,
        type: String
    },
    contact: {
        required: true,
        trim: true,
        type: Number,
        validate(value) {
            if (value.toString().length !== 10) {
                throw new Error(chalk.bold.red('NUM1: Number must be 10 digits long!')) //imc Error NUM1
            }
        },
    },
    subjects: [{
        required: true,
        trim: true,
        type: String
    }],
    class: {
        required: true,
        trim: true,
        type: String
    },
    society: [{

    }],
    year: {
        type: Number,
        trim: true
    },
    Dynamic: {

    }
})

const User = mongoose.model('User', userSchema)

module.exports = User