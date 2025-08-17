import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';
import { ClientRepository } from '../repositories/ClientRepository';

const router = Router();
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

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