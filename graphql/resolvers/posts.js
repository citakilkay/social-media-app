const {Query} = require('../typedef');
const Post = require('../../models/Post');
const resolvers = {
    Query: {
        async getPost() {
            try {
                const posts = await Post.find();
                return posts;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}

module.exports = resolvers