// Mock data
const users: User[] = [
  { id: '1', name: 'Juan Pérez', email: 'juan@example.com' },
  { id: '2', name: 'María López', email: 'maria@example.com' },
  { id: '3', name: 'Carlos Gómez', email: 'carlos@example.com' },
];

// Resolvers con tipos
const resolvers = {
  Query: {
    users: (): User[] => users,
    user: (_: any, { id }: UserArgs): User | undefined => 
      users.find(user => user.id === id),
  },
};

export default resolvers; 