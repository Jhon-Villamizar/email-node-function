import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST;
export const USER = process.env.USER;
export const PASS = process.env.PASS;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const TO = process.env.TO;
