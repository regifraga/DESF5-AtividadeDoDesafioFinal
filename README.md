# Bootcamp: Arquiteto(a) de Software
## Desafio Final

# Objetivos de Ensino
Exercitar os seguintes conceitos trabalhados nos Módulos:

1. Fundamentos de Arquitetura de Software.
2. Requisitos Arquiteturais e Modelagem Arquitetural.
3. Design Patterns, Estilos e Padrões Arquiteturais.
4. Principais Arquiteturas de Software da Atualidade.

# Enunciado

Você é Arquiteto(a) de Software em uma grande empresa de vendas on-line.
Você é responsável por construir e implantar uma solução que disponibilize dados de Cliente/Produto/Pedido (algum domínio) aos parceiros da empresa.

Para isso, você vai Projetar, Documentar e Implantar uma API REST, no padrão arquitetural MVC, que exponha um endpoint capaz de realizar um CRUD dos dados (e um pouco mais).

# Executando

## Construir e iniciar os containers
```bash
docker compose up -d
```

## Ver os logs

### Todos os logs
```bash
docker compose logs -f
```

### Apenas logs da API
```bash
docker compose logs -f api
```

### Apenas logs do banco
```bash
docker compose logs -f postgres
```

### Apenas logs do banco
```bash
docker compose logs -f postgres
```

## Parar os containers
```bash
docker compose down
```

# Algumas observações importantes:

1. O serviço postgres tem um healthcheck que garante que o banco esteja pronto antes de iniciar a API
2. O depends_on com condition: service_healthy garante que a API só inicia quando o PostgreSQL estiver saudável
3. Os volumes permitem que as alterações no código sejam refletidas imediatamente (hot-reload)
4. A rede app-network permite que os containers se comuniquem
5. O DB_HOST na API aponta para o nome do serviço postgres
6. Os volumes persistem os dados do PostgreSQL entre reinicializações

# Para testar se está tudo funcionando:

## Iniciar os serviços
```bash
docker compose up -d
```

## Verificar status
```bash
docker compose ps
```

# Testar a API (em um terminal bash)

## Criar um cliente
```bash
curl -X POST http://localhost:3000/api/clients \
    -H "Content-Type: application/json" \
    -d '{"name":"João Silva","email":"joao@email.com","phone":"11999999999","address":"Rua Exemplo, 123"}'
```

## Listar todos os clientes
```bash
curl http://localhost:3000/api/clients
```

## Buscar cliente por ID
```bash
curl http://localhost:3000/api/clients/1
```

## Buscar cliente por nome
```bash
curl http://localhost:3000/api/clients/search\?name\=João
```

## Atualizar cliente
```bash
curl -X PUT http://localhost:3000/api/clients/1 \
    -H "Content-Type: application/json" \
    -d '{"name":"João Silva Atualizado","email":"joao.novo@email.com"}'
```

## Deletar cliente
```bash
curl -X DELETE http://localhost:3000/api/clients/1
```

## Contar total de clientes
```bash
curl http://localhost:3000/api/clients/count
```

## Se precisar reconstruir a imagem da API após alterações no Dockerfile:
```bash
docker compose build api
docker compose up -d
```

> Com essa configuração, teremos tanto o banco de dados quanto a API rodando em containers Docker, com hot-reload para desenvolvimento e persistência de dados.

# Stack Tecnológica

## Backend
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Plataforma de containerização

## Principais Dependências
- **pg** - Cliente PostgreSQL para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente
- **nodemon** - Reinicialização automática do servidor em desenvolvimento

## Ferramentas de Desenvolvimento
- **TypeScript** - Linguagem principal
- **ts-node** - Execução de TypeScript
- **Docker Compose** - Orquestração de containers
- **ESLint** - Linter para identificar problemas no código
- **Prettier** - Formatador de código

## Arquitetura
- Padrão MVC (Model-View-Controller)
- Arquitetura em Camadas:
  - **Controllers**: Manipulação das requisições HTTP
  - **Services**: Lógica de negócio
  - **Repositories**: Acesso ao banco de dados
  - **Models**: Entidades do domínio
  - **Interfaces**: Contratos e tipos
  - **Routes**: Definição das rotas da API
  - **Config**: Configurações da aplicação
  - **Utils**: Utilitários e helpers

## Estrutura do Projeto
```typescript
src/
  ├── app.ts                 # Configuração do Express
  ├── server.ts              # Entrada da aplicação
  ├── config/               
  │   └── database.ts        # Configuração do PostgreSQL
  ├── controllers/
  │   └── ClientController.ts # Controlador de Clientes
  ├── interfaces/
  │   ├── IClient.ts         # Interface do Cliente
  │   └── IClientRepository.ts # Interface do Repositório
  ├── models/
  │   └── Client.ts          # Modelo de Cliente
  ├── repositories/
  │   └── ClientRepository.ts # Repositório de Clientes
  ├── routes/
  │   ├── clientRoutes.ts    # Rotas de Cliente
  │   └── index.ts           # Agregador de rotas
  ├── services/
  │   └── ClientService.ts   # Serviço de Cliente
  └── utils/
      └── createTables.ts    # Utilitário de criação de tabelas
```
