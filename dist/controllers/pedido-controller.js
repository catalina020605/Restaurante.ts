"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pedidoService_1 = __importDefault(require("../services/pedidoService")); // Importamos la función del servicio
const pedidoDto_1 = __importDefault(require("../Dto/pedidoDto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Importamos jwt para decodificar el token
const hacerPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { idMenu, direccion } = req.body;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '');
        const email = decoded.email;
        const pedido = new pedidoDto_1.default(idMenu, direccion, email);
        const resultado = yield pedidoService_1.default.hacerPedido(pedido);
        return res.status(201).send({
            status: "Pedido realizado exitosamente",
            pedido: resultado,
            token
        });
    }
    catch (error) {
        console.error("Error al hacer el pedido:", error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.default = hacerPedido;
