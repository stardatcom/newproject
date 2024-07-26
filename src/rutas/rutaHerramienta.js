import { Router } from "express";
import ControladorHerramienta from "../controladores/controladorHerramienta.js";

const enrutadorHerramienta = Router();


enrutadorHerramienta.get('/:id', ControladorHerramienta.leerHerramienta);
enrutadorHerramienta.put('/:id', ControladorHerramienta.actualizarHerramienta);


export default enrutadorHerramienta;