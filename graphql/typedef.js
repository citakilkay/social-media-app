const graphql = require('graphql-tag');
const Post = require('../models/Post');
const typeDefs = graphql`
    type Post{
        username: String!
        email: String!
        comments: String!
        body: String!
    }
    type Query{
        getPost: [Post]
    }`

module.exports = typeDefs