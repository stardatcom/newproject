import { Schema, model } from "mongoose";

const esquemaTomaHerramienta = new Schema(
    {
        nombre: { type: String, required: true },
        eventoEnDesarrollo: { type: String, required: true },
        estadoFisico: { type: Boolean, required: true },
    }
)

export default model("TomaHerramienta", esquemaTomaHerramienta);