# Clients API

This project is a RESTful API for managing a "Clientes" domain, implemented using Node.js, Express, and TypeScript. It follows the MVC (Model-View-Controller) architectural pattern and provides basic CRUD operations along with additional endpoints for counting and finding client records.

## Features

- Create, Read, Update, and Delete (CRUD) operations for clients.
- Count the total number of client records.
- Find clients by ID or name.
- Error handling middleware for consistent error responses.

## Technologies Used

- Node.js
- Express
- TypeScript
- PostgreSQL (with Docker)

## Project Structure

```
clients-api
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── config
│   │   └── database.ts
│   ├── controllers
│   │   └── ClientController.ts
│   ├── models
│   │   └── Client.ts
│   ├── services
│   │   └── ClientService.ts
│   ├── repositories
│   │   └── ClientRepository.ts
│   ├── routes
│   │   ├── index.ts
│   │   └── clientRoutes.ts
│   ├── interfaces
│   │   ├── IClient.ts
│   │   └── IClientRepository.ts
│   ├── middlewares
│   │   └── errorHandler.ts
│   └── utils
│       └── types.ts
├── docker-compose.yml
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd clients-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up the PostgreSQL database using Docker:
   ```
   docker-compose up -d
   ```

5. Run the application:
   ```
   npm run start
   ```

## API Usage

- **Create Client**: `POST /clients`
- **Get All Clients**: `GET /clients`
- **Get Client by ID**: `GET /clients/:id`
- **Get Clients by Name**: `GET /clients/name/:name`
- **Update Client**: `PUT /clients/:id`
- **Delete Client**: `DELETE /clients/:id`
- **Count Clients**: `GET /clients/count`

6. Test

## Iniciar a aplicação
   ```
   npm start
   ```
## Em outro terminal:

## Criar um cliente
   ```
   curl -X POST http://localhost:3000/api/clients \
   -H "Content-Type: application/json" \
   -d '{"name":"João Silva","email":"joao@email.com","phone":"11999999999","address":"Rua Exemplo, 123"}'
   ```

## Listar todos os clientes
   ```
   curl http://localhost:3000/api/clients
   ```

## Buscar cliente por ID
   ```
   curl http://localhost:3000/api/clients/1
   ```

## Buscar cliente por nome
   ```
   curl http://localhost:3000/api/clients/search\?name\=João
   ```

## Atualizar cliente
   ```
   curl -X PUT http://localhost:3000/api/clients/1 \
   -H "Content-Type: application/json" \
   -d '{"name":"João Silva Atualizado","email":"joao.novo@email.com"}'
   ```

## Deletar cliente
   ```
   curl -X DELETE http://localhost:3000/api/clients/1
   ```

## Contar total de clientes
   ```
   curl http://localhost:3000/api/clients/count
   ```

## License

This project is licensed under the MIT License.