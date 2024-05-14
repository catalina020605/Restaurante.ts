// services/pedido-service.ts
import Pedido from "../Dto/pedidoDto";
import PedidoRepository from "../repositories/pedidoRepository"; // Importamos el repositorio correcto

class PedidoService {
    static async hacerPedido(pedido: Pedido) {
        try {
            const resultado = await PedidoRepository.guardarPedido(pedido);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    static async obtenerPedidosPorCliente(email: string) {
        try {
            const pedidos = await PedidoRepository.obtenerPedidosPorCliente(email);
            return pedidos;
        } catch (error) {
            throw error;
        }
    }
}

export default PedidoService;

