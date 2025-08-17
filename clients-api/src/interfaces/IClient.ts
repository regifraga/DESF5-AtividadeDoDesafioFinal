export interface IClient {
    id: number;
    name: string;
    email: string;
    phone: string;
    address?: string;
    createdAt: Date;
    updatedAt: Date;
}