import { Router } from "express";
import ControladorBodega from "../controladores/controladorBodega.js";

const enrutadorBodega = Router();


enrutadorBodega.get('/:id', ControladorBodega.leerBodega);
enrutadorBodega.put('/:id', ControladorBodega.actualizarBodega);


export default enrutadorBodega;