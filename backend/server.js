import express from 'express'; 
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js"

dotenv.config(); 

const app = express(); 
const PORT = process.env.PORT || 5000;

// JSON verisini body'de kullanabilmek için middleware
app.use(express.json());
app.use("/api/products",productRoutes)


// Sunucuyu başlatma
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5000" + PORT);
});