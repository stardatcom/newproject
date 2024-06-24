import { Schema, model } from "mongoose";

const esquemaRetornoHerramienta = new Schema(
    {
        nombre: { type: String, required: true },
        eventoEnDesarrollo: { type: String, required: true },
        estadoFisico: { type: Boolean, required: true },
    }
)

export default model("RetornoHerramienta", esquemaRetornoHerramienta);