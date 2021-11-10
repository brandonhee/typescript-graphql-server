import {gql} from "apollo-server";
import {typeDefs as helloTypeDefs} from "./api/hello";

const root = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

const common = gql`
    enum EXAMPLE {
        ONE
        TWO
    }
`;

const typeDefs = [root, common, helloTypeDefs];

export default typeDefs;
