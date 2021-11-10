import {gql} from "apollo-server";

const typeDefs = gql`
    extend type Query {
        hello(world: String!): String
    }
`;

const resolvers = {
    hello: (_obj, args, _context, _info) => {
        return "hello " + args.world;
    },
};

export default {typeDefs, resolvers};
