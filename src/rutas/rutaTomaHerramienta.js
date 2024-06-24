import { Router } from 'express';
import ControladorTomaHerramienta from '../controladores/controladorTomaHerramienta.js';

const enrutadorTomaHerramineta = Router();

enrutadorTomaHerramineta.post('/', ControladorTomaHerramienta.crearTomaHerramineta);
enrutadorTomaHerramineta.get('/:id', ControladorTomaHerramienta.leerTomaHerramienta);
enrutadorTomaHerramineta.get('/', ControladorTomaHerramienta.leerTomaHerramientas);
enrutadorTomaHerramineta.put('/:id', ControladorTomaHerramienta.actualizarHerramientaTomada);
enrutadorTomaHerramineta.delete('/:id', ControladorTomaHerramienta.eliminarTomaHerramienta);

export default enrutadorTomaHerramineta;