import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        nombre: { type: String, required: true },
        email: { type: String, required: true },
        contrasenia: { type: String, required: true },
        
    }
)

export default model("Usuario", esquemaUsuario);