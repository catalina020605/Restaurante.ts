"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register_1 = __importDefault(require("./routes/register"));
const auth_1 = __importDefault(require("./routes/auth"));
const menu_1 = __importDefault(require("./routes/menu"));
const pedido_1 = __importDefault(require("./routes/pedido"));
const consultPedido_1 = __importDefault(require("./routes/consultPedido"));
const dbHealtCheck_1 = __importDefault(require("./config/dbHealtCheck"));
const verifyToken_1 = __importDefault(require("./middleware/verifyToken"));
const perfile_controller_1 = __importDefault(require("./controllers/perfile-controller")); // Importa el controlador de perfil
const app = (0, express_1.default)().use(body_parser_1.default.json());
app.use("/register", register_1.default);
app.use("/auth", auth_1.default);
app.use('/menu', menu_1.default);
app.use("/pedido", pedido_1.default);
app.use("/misPedidos", consultPedido_1.default);
app.use((0, cookie_parser_1.default)());
app.get("/miperfil", verifyToken_1.default, perfile_controller_1.default); // Usa el middleware de verificación de token para proteger esta ruta
(0, dbHealtCheck_1.default)()
    .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log("Servidor corriendo en el puerto", PORT);
    });
})
    .catch((error) => {
    console.error("No se pudo iniciar el servidor debido a un error en la base de datos:", error);
});
