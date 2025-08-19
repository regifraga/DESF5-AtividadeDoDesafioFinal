import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';
import { ClientRepository } from '../repositories/ClientRepository';

const router = Router();
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do cliente
 *         name:
 *           type: string
 *           description: Nome do cliente
 *         email:
 *           type: string
 *           description: Email do cliente
 *         phone:
 *           type: string
 *           description: Telefone do cliente
 *         address:
 *           type: string
 *           description: Endereço do cliente
 */

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Criar um novo cliente
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *   get:
 *     summary: Listar todos os clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Lista de clientes
 * 
 * /clients/count:
 *   get:
 *     summary: Retorna o número total de clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Total de clientes
 * 
 * /clients/{id}:
 *   get:
 *     summary: Buscar cliente por ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *   put:
 *     summary: Atualizar cliente
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *   delete:
 *     summary: Deletar cliente
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente deletado
 */

// Additional endpoints (devem vir antes das rotas com parâmetros)
router.get('/clients/count', clientController.countClients);
router.get('/clients/name/:name', clientController.findClientsByName);

// CRUD operations
router.post('/clients', clientController.createClient);
router.get('/clients', clientController.getAllClients);
router.get('/clients/:id', clientController.getClientById);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

export default router;