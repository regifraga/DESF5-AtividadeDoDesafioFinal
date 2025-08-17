import { Pool } from 'pg';
import dotenv from 'dotenv';
import { createTables } from '../utils/createTables';

// Carregar variáveis de ambiente
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'clients_db'
});

export const initDatabase = async () => {
    try {
        // Testar conexão
        await pool.connect();
        console.log('Database connected successfully');
        
        // Criar tabelas
        await createTables();
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
};

export default pool;