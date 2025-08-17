import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';
import { IClient } from '../interfaces/IClient';

export class ClientController {
    private clientService: ClientService;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    public createClient = async (req: Request, res: Response): Promise<void> => {
        try {
            const client = await this.clientService.createClient(req.body);
            res.status(201).json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create client' });
        }
    };

    public getAllClients = async (req: Request, res: Response): Promise<void> => {
        try {
            const clients = await this.clientService.getAllClients();
            res.json(clients);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch clients' });
        }
    };

    public getClientById = async (req: Request, res: Response): Promise<void> => {
        try {
            const client = await this.clientService.getClientById(Number(req.params.id));
            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }
            res.json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch client' });
        }
    };

    public updateClient = async (req: Request, res: Response): Promise<void> => {
        try {
            const client = await this.clientService.updateClient(Number(req.params.id), req.body);
            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }
            res.json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update client' });
        }
    };

    public deleteClient = async (req: Request, res: Response): Promise<void> => {
        try {
            const success = await this.clientService.deleteClient(Number(req.params.id));
            if (!success) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete client' });
        }
    };

    public countClients = async (req: Request, res: Response): Promise<void> => {
        try {
            const count = await this.clientService.countClients();
            res.json({ count });
        } catch (error) {
            res.status(500).json({ error: 'Failed to count clients' });
        }
    };

    public findClientsByName = async (req: Request, res: Response): Promise<void> => {
        try {
            const clients = await this.clientService.findClientsByName(req.params.name);
            res.json(clients);
        } catch (error) {
            res.status(500).json({ error: 'Failed to search clients' });
        }
    };
}