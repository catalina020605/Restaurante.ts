// Dto/pedidoDto.ts
class Pedido {
    private _idMenu: number;
    private _direccion: string;
    private _email: string;

    constructor(idMenu: number, direccion: string, email: string) {
        this._idMenu = idMenu;
        this._direccion = direccion;
        this._email = email;
    }

    get idMenu(): number {
        return this._idMenu;
    }

    set idMenu(value: number) {
        this._idMenu = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}

export default Pedido;
