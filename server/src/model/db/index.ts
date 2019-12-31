import mysql from 'mysql2';

// connection Pool 을 형성합니다.
const DBPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

export default DBPool;
