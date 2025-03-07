import express from "express";

import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Ürünleri listeleme
router.get("/", getProducts);

// Ürün ekleme
router.post("/", createProduct);

// Ürün güncelleme
router.put("/:id", updatedProduct);

// Ürün silme
router.delete("/:id", deleteProduct);

export default router;