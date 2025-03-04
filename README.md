# Visor Sistemas - Backend GraphQL

Este proyecto implementa un backend GraphQL utilizando Apollo Server para Visor Sistemas.

## Características

- Servidor GraphQL con Apollo Server
- Implementado con TypeScript para mejor tipado y seguridad
- Integración con Express
- Estructura modular con esquemas y resolvers
- Datos de ejemplo para desarrollo

## Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
cd visor-sistemas-server
npm install
```

## Uso

Para iniciar el servidor en modo desarrollo con recarga automática:

```bash
npm run dev
```

Para compilar el proyecto TypeScript:

```bash
npm run build
```

Para iniciar el servidor en modo producción (requiere compilar primero):

```bash
npm run build
npm start
```

El servidor estará disponible en: http://localhost:4000
La interfaz GraphQL estará disponible en: http://localhost:4000/graphql

## Ejemplos de consultas

### Obtener todos los usuarios

```graphql
query {
  users {
    id
    name
    email
  }
}
```

### Obtener un usuario por ID

```graphql
query {
  user(id: "1") {
    id
    name
    email
  }
}
```

## Estructura del proyecto

```
visor-sistemas-server/
├── src/                  # Código fuente en TypeScript
│   ├── index.ts          # Punto de entrada del servidor
│   ├── schema/           # Definiciones del esquema GraphQL
│   ├── resolvers/        # Resolvers de GraphQL
│   └── types/            # Definiciones de tipos TypeScript
├── dist/                 # Código compilado (generado al construir)
├── package.json
├── tsconfig.json         # Configuración de TypeScript
└── README.md
```