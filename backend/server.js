import express from 'express'; 
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// Frontend backend isteklerinde host kontrolü için
const cors = require('cors');

import productRoutes from "./routes/product.route.js"

dotenv.config(); 

const app = express(); 
const PORT = process.env.PORT || 5000;

// JSON verisini body'de kullanabilmek için middleware
app.use(express.json());
app.use("/api/products",productRoutes)

// Allowed host tanımıyla sadece seni
const allowedHosts = ['http://localhost:5173', ''];

app.use((req, res, next) => {
  const host = req.hostname;
  if (allowedHosts.includes(host)) {
    next();
  } else {
    res.status(403).send('Forbidden: Host not allowed');
  }
});

// Sunucuyu başlatma
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5000" + PORT);
});
