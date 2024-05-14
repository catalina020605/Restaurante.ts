"use strict";
// src/routes/menuRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_controller_1 = __importDefault(require("../controllers/menu-controller"));
const router = express_1.default.Router();
// Endpoint para obtener la lista de menús disponibles
router.get('/menu', menu_controller_1.default.getMenuList);
exports.default = router;
