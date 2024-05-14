// routes/pedido.ts
import express from "express";
import pedidoController from '../controllers/pedido-controller';
const router = express.Router();

router.post('/pedido', pedidoController); // Usamos la función de controlador directamente

export default router;
