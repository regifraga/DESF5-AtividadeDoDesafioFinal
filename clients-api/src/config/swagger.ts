import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Clients API',
      version: '1.0.0',
      description: 'API REST para gerenciamento de clientes',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor de Desenvolvimento',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Arquivos que contém anotações do Swagger
};

export const specs = swaggerJsdoc(options);