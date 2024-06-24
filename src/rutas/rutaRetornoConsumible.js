import { Router } from 'express';
import ControladorRetornoConsumible from '../controladores/controladorRetornoConsumible.js';

const enrutadorRetornoConsumible = Router();

enrutadorRetornoConsumible.post('/', ControladorRetornoConsumible.crearRetornoConsumible);
enrutadorRetornoConsumible.get('/:id', ControladorRetornoConsumible.leerRetornoConsumible);
enrutadorRetornoConsumible.get('/', ControladorRetornoConsumible.leerRetornoConsumibles);
enrutadorRetornoConsumible.put('/:id', ControladorRetornoConsumible.actualizarConsumibleRetornado);
enrutadorRetornoConsumible.delete('/:id', ControladorRetornoConsumible.eliminarRetornoConsumible);

export default enrutadorRetornoConsumible;