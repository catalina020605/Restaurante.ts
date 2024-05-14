"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_Helper_1 = require("../helpers/jwt-Helper");
const authCheckMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    jsonwebtoken_1.default.verify(token, jwt_Helper_1.secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Failed to authenticate token" });
        }
        req.body.user = decoded.email; // Guarda el usuario decodificado en el objeto de solicitud para usarlo en el controlador
        next();
    });
};
exports.default = authCheckMiddleware;
