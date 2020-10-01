const { gql } = require("apollo-server-lambda");

const schema = gql`
    type User @key(fields: "id") {
        id: ID!
        token: String
    }

    input CreateUserInput {
        token: String
    }

    input UpdateUserInput {
        token: String
    }

    type Query {
        getUser(id: ID!): User
        listUsers: [User]
    }

    type Mutation {
        createUser(input: CreateUserInput): User
        updateUser(id: ID!, input: UpdateUserInput): User
        deleteUser(id: ID!): User
    }
`;
exports.schema = schema;
