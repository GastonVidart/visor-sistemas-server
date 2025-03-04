import { getSistemaById, getSistemas } from "../services/sistemas/sistemas-service";

const resolvers = {
  Query: {
    //TODO: obtener los campos para saber que filtrar
    sistemas: getSistemas,
    sistemaById: (_: any, { id }: { id: string }) => getSistemaById(id),
  },
};

export default resolvers;
