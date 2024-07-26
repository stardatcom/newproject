import { Router } from "express";
import ControladorRolUsuario from "../controladores/controladorRolUsuario.js";

const enrutadorRolUsuario = Router();

enrutadorRolUsuario.get('/:id', ControladorRolUsuario.leerRolUsuario);


export default enrutadorRolUsuario;