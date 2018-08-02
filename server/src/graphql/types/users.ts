export default `type Query {
                  user(id: ID!): User
                  users: [User]
                }

                type Mutation {
                  updateUser(id: ID!, username: String!): User
                  createUser(username:String!):User
                }

                type User {
                  id: ID!,
                  username: String
                }`;
