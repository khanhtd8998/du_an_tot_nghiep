import { Router } from "express";
import { create, deleteProduct, getAll, getProductById, related, updateProduct } from "../controllers/product.controller.js";


const router = Router();
router.get("/products", getAll);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.get("/products/:categoryId/related/:productId", related);
router.put("/products/:id", updateProduct);
router.post("/products", create);
export default router;