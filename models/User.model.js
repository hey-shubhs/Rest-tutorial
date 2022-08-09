const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String

});

module.exports = mongoose.model('Users', userSchema)