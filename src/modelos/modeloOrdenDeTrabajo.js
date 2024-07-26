import { Schema, model } from "mongoose";

const esquemaOrdenDeTrabajo = new Schema(
    {
        ID: { type: String, required: true },
        descripcion: { type: String, required: true },
        listaHerramienta: { type: Array, required: true },
        listaBodega: { type: Array, required: true },
        fecha: { type: Date, required: true },
        IDusuario: { type: String, required: true },
    }
) 

export default model("OrdenDeTrabajo", esquemaOrdenDeTrabajo);