import { IClient } from './IClient';

export interface IClientRepository {
    create(client: Omit<IClient, 'id'>): Promise<IClient>;
    findAll(): Promise<IClient[]>;
    findById(id: number): Promise<IClient | null>;
    findByName(name: string): Promise<IClient[]>;
    update(id: number, client: Partial<IClient>): Promise<IClient | null>;
    delete(id: number): Promise<boolean>;
    count(): Promise<number>;
}