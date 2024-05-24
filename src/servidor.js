import express from "express";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";

const servidor = express();
// aca abajo van las rutas 

servidor.use("/usuarios", enrutadorUsuarios);

servidor.get('/', function (req, res) {
    res.json({mensaje: "works!"});
})

export default servidor;