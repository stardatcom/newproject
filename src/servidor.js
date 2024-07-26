// import path from 'path';
import express from "express";
import cors from 'cors';
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaIncioSesion.js";
import enrutadorTomaHerramienta from './rutas/rutaTomaHerramienta.js';
import enrutadorRetornoHerramineta from './rutas/rutaRetornoHerramienta.js';
import enrutadorTomaConsumible from './rutas/rutaTomaConsumible.js';
import enrutadorRetornoConsumible from './rutas/rutaRetornoConsumible.js';
import enrutadorRolUsuario from  './rutas/rutaRolUsuario.js';
import enrutadorHerramienta from  './rutas/rutaHerramienta.js';
import enrutadorBodega from  './rutas/rutaBodega.js';
import enrutadorOrdenDeTrabajo from './rutas/rutaOrdenDeTrabajo.js';

const servidor = express();

servidor.use(cors());
servidor.use(express.json());
servidor.use(morgan('dev'));
// sección de las rutas 

servidor.use("/usuarios", enrutadorUsuarios);
servidor.use("/iniciar-sesion", enrutadorInicioSesion);
servidor.use('/toma-herramienta', enrutadorTomaHerramienta);
servidor.use('/retorno-herramienta', enrutadorRetornoHerramineta);
servidor.use('/toma-consumible', enrutadorTomaConsumible);
servidor.use('/retorno-consumible', enrutadorRetornoConsumible);
servidor.use('/rol-id', enrutadorRolUsuario);
servidor.use('/herramienta', enrutadorHerramienta);
servidor.use('/bodega', enrutadorBodega);
servidor.use('/orden-de-trabajo', enrutadorOrdenDeTrabajo);
//servidor.use('/imagenes', express.static(path.resolve('imagenes')));


servidor.get('/', function (req, res) {
    res.json({mensaje: "works!"});
})

export default servidor;