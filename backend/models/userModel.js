const mongoose = reuire('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required
    }
})

module.exports = mongoose.model('User', userSchema)