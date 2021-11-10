import {ApolloServer, gql} from "apollo-server";
import resolvers from "../resolvers";
import typeDefs from "../typeDefs";

it("query hello", async () => {
    // create a test server to test against, using our production schema
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const HELLO_QUERY = gql`
        query Hello($somewhere: String!) {
            hello(somewhere: $somewhere) {
                result
            }
        }
    `;

    // run query against the server and snapshot the output
    const res = await server.executeOperation({query: HELLO_QUERY, variables: {somewhere: "world"}});
    expect(res.data.hello.result).toEqual("hello world");
});
