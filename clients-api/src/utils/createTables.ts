import pool from '../config/database';

export const createTables = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            phone VARCHAR(20) NOT NULL,
            address TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Função para atualizar o updated_at automaticamente
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = CURRENT_TIMESTAMP;
            RETURN NEW;
        END;
        $$ language 'plpgsql';

        -- Trigger para atualizar o updated_at
        DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
        CREATE TRIGGER update_clients_updated_at
            BEFORE UPDATE ON clients
            FOR EACH ROW
            EXECUTE FUNCTION update_updated_at_column();
    `;

    try {
        await pool.query(createTableQuery);
        console.log('Tables and triggers created successfully');
    } catch (error) {
        console.error('Error creating tables:', error);
        throw error;
    }
};