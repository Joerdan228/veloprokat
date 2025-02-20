const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к PostgreSQL
const pool = new Pool({
  user: "your_postgres_user",
  host: "localhost",
  database: "veloprokat",
  password: "your_postgres_password",
  port: 5432,
});

// Маршрут для получения списка велосипедов
app.get("/api/bikes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bikes");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});