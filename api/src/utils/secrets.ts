import dotenv from 'dotenv';

// .env configuration
dotenv.config({path: '.env'})

export const ENVIRONMENT = process.env.NODE_ENV;

const prod = ENVIRONMENT === "production";

export const DB_URI = prod ? process.env["MONGO_URI"] : process.env["MONGO_URI_LOCAL"] 
