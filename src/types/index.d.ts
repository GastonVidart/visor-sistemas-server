// Tipos para el modelo User
interface User {
  id: string;
  name: string;
  email: string;
}

// Tipos para argumentos de resolvers
interface UserArgs {
  id: string;
}

// Tipos para el contexto de Apollo Server
interface ApolloContext {
  // Aquí puedes añadir propiedades del contexto como dataSources, autenticación, etc.
} 