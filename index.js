'use strict';
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
servidor.listen(2000)