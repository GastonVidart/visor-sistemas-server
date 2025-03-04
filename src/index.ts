import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import http from "http";

// Importar schema y resolvers
import resolvers from "./resolvers/resolvers";
import typeDefs from "./schema/schema";
import { ApolloContext } from "./types";

// Configuración de la app Express
const app = express();
const httpServer = http.createServer(app);

// Configuración de Apollo Server
async function startServer(): Promise<void> {
  // Crear instancia del servidor Apollo
  const server = new ApolloServer<ApolloContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // Iniciar el servidor Apollo
  await server.start();

  // Aplicar middleware Express
  app.use("/graphql", cors<cors.CorsRequest>(), bodyParser.json(), expressMiddleware(server));

  // Ruta base para verificar el estado del servidor
  app.get("/", (req: Request, res: Response) => {
    res.send("¡Servidor GraphQL de Visor Sistemas en funcionamiento!");
  });

  // Iniciar el servidor HTTP
  const PORT = process.env.PORT ?? 4000;
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT as number }, resolve));

  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
  console.log(`📈 GraphQL disponible en http://localhost:${PORT}/graphql`);
}

// Iniciar el servidor y manejar errores
startServer().catch((err) => {
  console.error("Error al iniciar el servidor:", err);
});
