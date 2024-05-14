// routes/consulta-pedido.ts
import express from "express";
import consultarPedidosPorCliente from '../controllers/consultPedido-controller';
import verifyTokenMiddleware from '../middleware/verifyToken'; // Importamos el middleware de verificación de token

const router = express.Router();

router.get('/misPedidos', verifyTokenMiddleware, consultarPedidosPorCliente);

export default router;
