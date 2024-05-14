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
const pedidoService_1 = __importDefault(require("../services/pedidoService")); // Importamos el servicio de pedido
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Importamos jwt para decodificar el token
const consultarPedidosPorCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Verificamos si el token está presente en la solicitud
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        // Decodificamos el token y extraemos el email del usuario
        let email;
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '');
            email = decoded.email;
        }
        catch (error) {
            // Si hay un error al decodificar el token, devolvemos un mensaje de error
            return res.status(401).json({ message: "Failed to authenticate token" });
        }
        // Utilizamos el servicio para obtener los pedidos del cliente
        const pedidos = yield pedidoService_1.default.obtenerPedidosPorCliente(email);
        return res.status(200).json({ pedidos });
    }
    catch (error) {
        // Manejamos otros errores internos del servidor
        console.error("Error al consultar los pedidos:", error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.default = consultarPedidosPorCliente;
