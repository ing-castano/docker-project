import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'contenedor-mysql', // nombre del contenedor de MySQL de Docker
  port: 3306,
  user: 'root',
  password: 'clave123',
  database: 'testPFO2db',
  waitForConnections: true,
  connectionLimit: 10,
});

app.get('/users', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'DB error', details: err });
  }
});

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});