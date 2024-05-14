"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dto/pedidoDto.ts
class Pedido {
    constructor(idMenu, direccion, email) {
        this._idMenu = idMenu;
        this._direccion = direccion;
        this._email = email;
    }
    get idMenu() {
        return this._idMenu;
    }
    set idMenu(value) {
        this._idMenu = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
exports.default = Pedido;
