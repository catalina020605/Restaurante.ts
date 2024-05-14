"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.default = Auth;
