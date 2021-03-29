const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    username: String,
    body: String,
    createddate: Date,
    comments: [
        {
            username: String,
            body: String,
            createddate: String
        }
    ],
    likes: [{
        username: String,
        createddate: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = mongoose.model('Post', PostSchema);