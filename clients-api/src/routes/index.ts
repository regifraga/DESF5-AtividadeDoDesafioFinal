import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const router = Router();
const clientController = new ClientController();

// Client routes
router.post('/clients', clientController.createClient);
router.get('/clients', clientController.findAllClients);
router.get('/clients/count', clientController.countClients);
router.get('/clients/:id', clientController.findClientById);
router.get('/clients/name/:name', clientController.findClientsByName);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

export default router;