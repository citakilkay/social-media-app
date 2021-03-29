const typeDefs = require('./graphql/typedef');
const resolvers = require('./graphql/resolvers');
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv/config');


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