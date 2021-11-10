import {generateTypeScriptTypes} from "graphql-schema-typescript";
// import typeDefs from "./typeDefs";

// let schema = "";

// typeDefs.forEach(t => {
//     schema += t.loc.source.body;
// });

const schema = `
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }

    enum EXAMPLE {
        ONE
        TWO
    }

    type HelloResult {
        result: String
    }
    extend type Query {
        hello(somewhere: String!): HelloResult
    }
`;

generateTypeScriptTypes(schema, "./types")
    .then(() => {
        console.log(schema);
        console.log("DONE");
        process.exit(0);
    })
    .catch(err => {
        console.log(schema);

        console.error(err);
        process.exit(1);
    });
