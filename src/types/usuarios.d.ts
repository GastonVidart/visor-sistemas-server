// Tipos para el modelo User
export interface User {
  id: string;
  name: string;
  email: string;
}

// Tipos para argumentos de resolvers
export interface UserArgs {
  id: string;
}