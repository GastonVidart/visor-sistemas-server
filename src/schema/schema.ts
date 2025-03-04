import sistemasTypeDefs from './sistemas-schema'; // Importar el esquema de sistemas

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  ${sistemasTypeDefs}

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

export default typeDefs; 