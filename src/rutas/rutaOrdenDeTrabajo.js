import { Router } from "express";
import ControladorOrdenDeTrabajo from "../controladores/controladorOrdenDeTrabajo.js";

const enrutadorOrdenDeTrabajo = Router();

enrutadorOrdenDeTrabajo.post('/', ControladorOrdenDeTrabajo.crearOrdenDeTrabajo);
enrutadorOrdenDeTrabajo.get('/:id', ControladorOrdenDeTrabajo.leerOrdenDeTrabajo);
enrutadorOrdenDeTrabajo.get('/', ControladorOrdenDeTrabajo.leerOrdenesDeTrabajo);
enrutadorOrdenDeTrabajo.delete('/:id', ControladorOrdenDeTrabajo.eliminarOrdenDeTrabajo);

export default enrutadorOrdenDeTrabajo;