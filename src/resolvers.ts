import {hello} from "./api/hello";

const resolvers = {
    Query: {
        hello,
    },
};

export default resolvers;
