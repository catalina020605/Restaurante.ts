// controllers/consulta-pedido-controller.ts
import { Request, Response } from "express";
import PedidoService from "../services/pedidoService"; // Importamos el servicio de pedido
import jwt from "jsonwebtoken"; // Importamos jwt para decodificar el token
import Pedido from "../Dto/pedidoDto";

const consultarPedidosPorCliente = async (req: Request, res: Response) => {
  try {
    // Verificamos si el token está presente en la solicitud
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    // Decodificamos el token y extraemos el email del usuario
    let email: string;
    try {
        const decoded: any = jwt.verify(token, process.env.SECRET_KEY || '');
        email = decoded.email;
    } catch (error) {
        // Si hay un error al decodificar el token, devolvemos un mensaje de error
        return res.status(401).json({ message: "Failed to authenticate token" });
    }
    
    // Utilizamos el servicio para obtener los pedidos del cliente
    const pedidos = await PedidoService.obtenerPedidosPorCliente(email);

    return res.status(200).json({ pedidos });
  } catch (error: any) {
    // Manejamos otros errores internos del servidor
    console.error("Error al consultar los pedidos:", error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

export default consultarPedidosPorCliente;
