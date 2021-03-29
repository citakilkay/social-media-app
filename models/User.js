const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: String,
    email: String,
    signupdate: String
});

module.exports = mongoose.model('User', PostSchema);