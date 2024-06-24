import { Schema, model } from "mongoose";

const esquemaRetornoConsumible = new Schema(
    {
        nombre: { type: String, required: true },
        eventoEnDesarrollo: { type: String, required: true },
        cantidad: { type: String, required: true },
    }
)

export default model("RetornoConsumible", esquemaRetornoConsumible);