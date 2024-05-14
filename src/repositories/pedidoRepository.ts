// repositories/PedidoRepository.ts
import db from "../config/config-db";
import Pedido from "../Dto/pedidoDto";

class PedidoRepository {
    static async guardarPedido(pedido: Pedido) {
        try {
            const sql = "INSERT INTO pedido (idMenu, direccion, email) VALUES (?, ?, ?)";
            const values = [pedido.idMenu, pedido.direccion, pedido.email];
            const resultado = await db.execute(sql, values);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    static async obtenerPedidosPorCliente(email: string) {
        try {
            const sql = "SELECT * FROM pedido WHERE email = ?";
            const [rows] = await db.execute(sql, [email]);
            return rows;
        } catch (error) {
            throw error;
        }
    }
}

export default PedidoRepository;
