import {ApolloServer} from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolver";

const server = new ApolloServer({cors: true, typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
