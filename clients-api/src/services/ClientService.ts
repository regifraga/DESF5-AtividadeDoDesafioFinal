import { IClient } from '../interfaces/IClient';
import { IClientRepository } from '../interfaces/IClientRepository';

export class ClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    }

    async createClient(clientData: Omit<IClient, 'id'>): Promise<IClient> {
        return await this.clientRepository.create(clientData);
    }

    async getAllClients(): Promise<IClient[]> {
        return await this.clientRepository.findAll();
    }

    async getClientById(id: number): Promise<IClient | null> {
        return await this.clientRepository.findById(id);
    }

    async updateClient(id: number, clientData: Partial<IClient>): Promise<IClient | null> {
        return await this.clientRepository.update(id, clientData);
    }

    async deleteClient(id: number): Promise<boolean> {
        return await this.clientRepository.delete(id);
    }

    public async countClients(): Promise<number> {
        try {
            return await this.clientRepository.count();
        } catch (error) {
            console.error('Error in countClients service:', error);
            throw error;
        }
    }

    async findClientsByName(name: string): Promise<IClient[]> {
        return await this.clientRepository.findByName(name);
    }
}