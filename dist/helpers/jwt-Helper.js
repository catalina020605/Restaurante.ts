"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.secretKey = void 0;
// helpers/jwtHelper.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'sofia20';
exports.secretKey = secretKey;
const generateToken = (email) => {
    return jsonwebtoken_1.default.sign({ email }, secretKey, { expiresIn: '24h' });
};
exports.generateToken = generateToken;
