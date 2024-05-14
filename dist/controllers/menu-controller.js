"use strict";
// src/controllers/menuController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataMenues_1 = __importDefault(require("../data/dataMenues"));
class MenuController {
    static getMenuList(req, res) {
        res.json(dataMenues_1.default);
    }
}
exports.default = MenuController;
