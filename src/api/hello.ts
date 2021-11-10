import {gql} from "apollo-server";

export const typeDefs = gql`
    type HelloResult {
        result: String
    }
    extend type Query {
        hello(somewhere: String!): HelloResult
    }
`;

export function hello(_obj, args) {
    console.log(args);
    return {result: "hello " + args.somewhere};
}
