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
const pedidoRepository_1 = __importDefault(require("../repositories/pedidoRepository")); // Importamos el repositorio correcto
class PedidoService {
    static hacerPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultado = yield pedidoRepository_1.default.guardarPedido(pedido);
                return resultado;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static obtenerPedidosPorCliente(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidos = yield pedidoRepository_1.default.obtenerPedidosPorCliente(email);
                return pedidos;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = PedidoService;