const { ApolloServer } = require('apollo-server');
const graphql  = require('graphql-tag');
const mongoose = require('mongoose');
require('dotenv/config');

const typeDefs = graphql`
    type Query{
        sayHi: String!
    }`

const resolvers = {
    Query : {
        sayHi: () => 'Hi, this is mongo'
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
server.listen({ port: 5000 })
    .then((res) => {
        console.log(`Server On Here: ${res.url}`)
    }).catch((err) => {
        console.log("This is the error: " + err);
    });