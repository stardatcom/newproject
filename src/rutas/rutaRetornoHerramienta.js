import { Router } from 'express';
import ControladorRetornoHerramienta from '../controladores/controladorRetornoHerramienta.js';

const enrutadorRetornoHerramineta = Router();

enrutadorRetornoHerramineta.post('/', ControladorRetornoHerramienta.crearRetornoHerramineta);
enrutadorRetornoHerramineta.get('/:id', ControladorRetornoHerramienta.leerRetornoHerramienta);
enrutadorRetornoHerramineta.get('/', ControladorRetornoHerramienta.leerRetornoHerramientas);
enrutadorRetornoHerramineta.put('/:id', ControladorRetornoHerramienta.actualizarHerramientaRetornada);
enrutadorRetornoHerramineta.delete('/:id', ControladorRetornoHerramienta.eliminarRetornoHerramienta);

export default enrutadorRetornoHerramineta;