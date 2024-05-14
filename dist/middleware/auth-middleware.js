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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const jwt_Helper_1 = require("../helpers/jwt-Helper");
const authDto_1 = __importDefault(require("../Dto/authDto"));
const authMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield UserRepository_1.default.login(new authDto_1.default(email, password));
        const rows = result[0];
        if (rows.length > 0) {
            const isPasswordValid = yield bcryptjs_1.default.compare(password, rows[0].password);
            if (!isPasswordValid) {
                return res.status(401).json({ status: 'incorrect username or password' });
            }
            const token = (0, jwt_Helper_1.generateToken)(email);
            return res.status(200).json({ status: 'correct username and password', token });
        }
        else {
            return res.status(401).json({ status: 'incorrect username or password' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = authMiddleware;
