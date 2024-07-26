import { Schema, model } from "mongoose";

const esquemaBodega = new Schema(
    {
        ID: { type: String, required: true },
        nombre: { type: String, required: true },
    }
) 

export default model("Bodega", esquemaBodega);