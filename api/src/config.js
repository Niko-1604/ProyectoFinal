import { config } from "dotenv";
config();

//variables para conectarme al servidor

export const PORT = process.env.PORT || 8000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "erp";
export const DB_PORT = process.env.DB_PORT || 3306;
