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
// repositories/PedidoRepository.ts
const config_db_1 = __importDefault(require("../config/config-db"));
class PedidoRepository {
    static guardarPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO pedido (idMenu, direccion, email) VALUES (?, ?, ?)";
                const values = [pedido.idMenu, pedido.direccion, pedido.email];
                const resultado = yield config_db_1.default.execute(sql, values);
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
                const sql = "SELECT * FROM pedido WHERE email = ?";
                const [rows] = yield config_db_1.default.execute(sql, [email]);
                return rows;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = PedidoRepository;
