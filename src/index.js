/*'use strict';
const express = require("express");

const servidor = express();

servidor.get("/", (solicitud, respuesta)=>{
    respuesta.json({
        saludo: "Hola,actualizado"
    })
});

servidor.get("/xxx", (solicitud, respuesta)=>{
    respuesta.redirect(301, "/");
})
servidor.listen(2000) */

// aqui importo el servidor de express
import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";

// aqui enciendo el servidor y lo pongo a escuchar peticiones
servidor.listen(2000, ()=>{
    console.log("Servidor corriendo en el puerto 2000");
})