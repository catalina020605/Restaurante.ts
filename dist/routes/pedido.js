"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/pedido.ts
const express_1 = __importDefault(require("express"));
const pedido_controller_1 = __importDefault(require("../controllers/pedido-controller"));
const router = express_1.default.Router();
router.post('/pedido', pedido_controller_1.default); // Usamos la función de controlador directamente
exports.default = router;
