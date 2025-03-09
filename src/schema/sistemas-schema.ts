const sistemasTypeDefs = `#graphql
  type Sistema {
    id: ID!
    nombre: String!
    descripcion: String
    conectado: [ID]
    tipo: String!
    tecnologias: [String]
    entorno: [String]
  }

  extend type Query {
    sistemas: [Sistema]
    sistemaById(id: ID!): Sistema
  }
`;

export default sistemasTypeDefs; 