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
const config_db_1 = __importDefault(require("../config/config-db"));
class UserRepository {
    static add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO cliente (email, nombres, apellidos, direccion, telefono, password) VALUES (?, ?, ?, ?, ?, ?)";
            const values = [
                user.email,
                user.nombres,
                user.apellidos,
                user.direccion,
                user.telefono,
                user.password,
            ];
            return config_db_1.default.execute(sql, values);
        });
    }
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT password FROM cliente WHERE email=?";
            const values = [auth.email];
            return config_db_1.default.execute(sql, values);
        });
    }
}
exports.default = UserRepository;
