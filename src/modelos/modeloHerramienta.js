import { Schema, model } from "mongoose";

const esquemaHerramienta = new Schema(
    {
        ID: { type: String, required: true },
        nombre: { type: String, required: true },
        disponible: { type: Boolean, required: true },
    }
) 

export default model("Herramienta", esquemaHerramienta);