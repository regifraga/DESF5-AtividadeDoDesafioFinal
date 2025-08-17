import { IClient } from '../interfaces/IClient';
import { IClientRepository } from '../interfaces/IClientRepository';
import pool from '../config/database';
import { QueryResult } from 'pg';

export class ClientRepository implements IClientRepository {
    public async create(client: Omit<IClient, 'id'>): Promise<IClient> {
        const query = `
            INSERT INTO clients (name, email, phone, address)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const values = [client.name, client.email, client.phone, client.address];
        const result: QueryResult<IClient> = await pool.query(query, values);
        return result.rows[0];
    }

    public async findAll(): Promise<IClient[]> {
        const query = 'SELECT * FROM clients ORDER BY created_at DESC';
        const result: QueryResult<IClient> = await pool.query(query);
        return result.rows;
    }

    public async findById(id: number): Promise<IClient | null> {
        const query = 'SELECT * FROM clients WHERE id = $1';
        const result: QueryResult<IClient> = await pool.query(query, [id]);
        return result.rows[0] || null;
    }

    public async findByName(name: string): Promise<IClient[]> {
        const query = 'SELECT * FROM clients WHERE name ILIKE $1';
        const result: QueryResult<IClient> = await pool.query(query, [`%${name}%`]);
        return result.rows;
    }

    public async update(id: number, client: Partial<IClient>): Promise<IClient | null> {
        const fields = Object.keys(client).map((key, index) => `${key} = $${index + 2}`);
        const values = Object.values(client);
        const query = `
            UPDATE clients 
            SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP
            WHERE id = $1
            RETURNING *
        `;
        const result: QueryResult<IClient> = await pool.query(query, [id, ...values]);
        return result.rows[0] || null;
    }

    public async delete(id: number): Promise<boolean> {
        const query = 'DELETE FROM clients WHERE id = $1';
        const result: QueryResult = await pool.query(query, [id]);
        return (result.rowCount ?? 0) > 0;
    }

    public async count(): Promise<number> {
        const query = 'SELECT COUNT(*) as count FROM clients';
        const result: QueryResult<{ count: string }> = await pool.query(query);
        return parseInt(result.rows[0].count);
    }
}