import dotenv from 'dotenv';
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 8001,
  apiKey: process.env.API_KEY || '',
  dbUrl: process.env.DB_CNN || ''
  // jwtSecret: process.env.JWT_SECRET || 'simple secret'
};

export { config };
