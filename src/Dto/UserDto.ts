class User {
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _direccion: string;
    private _telefono: string;
    private _password: string;

    constructor(email: string, nombres: string, apellidos: string, direccion: string, telefono: string, password: string) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._telefono = telefono;
        this._password = password;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get nombres(): string {
        return this._nombres;
    }

    set nombres(value: string) {
        this._nombres = value;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    set apellidos(value: string) {
        this._apellidos = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get telefono(): string {
        return this._telefono;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}

export default User;
