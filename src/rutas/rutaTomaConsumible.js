import { Router } from 'express';
import ControladorTomaConsumible from '../controladores/controladorTomaConsumible.js';

const enrutadorTomaConsumible = Router();

enrutadorTomaConsumible.post('/', ControladorTomaConsumible.crearTomaConsumible);
enrutadorTomaConsumible.get('/:id', ControladorTomaConsumible.leerTomaConsumible);
enrutadorTomaConsumible.get('/', ControladorTomaConsumible.leerTomaConsumibles);
enrutadorTomaConsumible.put('/:id', ControladorTomaConsumible.actualizarConsumibleTomado);
enrutadorTomaConsumible.delete('/:id', ControladorTomaConsumible.eliminarTomaConsumible);

export default enrutadorTomaConsumible;