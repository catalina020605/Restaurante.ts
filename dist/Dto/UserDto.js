"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, nombres, apellidos, direccion, telefono, password) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._telefono = telefono;
        this._password = password;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get nombres() {
        return this._nombres;
    }
    set nombres(value) {
        this._nombres = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.default = User;
