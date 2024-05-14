"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/consulta-pedido.ts
const express_1 = __importDefault(require("express"));
const consultPedido_controller_1 = __importDefault(require("../controllers/consultPedido-controller"));
const verifyToken_1 = __importDefault(require("../middleware/verifyToken")); // Importamos el middleware de verificación de token
const router = express_1.default.Router();
router.get('/misPedidos', verifyToken_1.default, consultPedido_controller_1.default);
exports.default = router;
