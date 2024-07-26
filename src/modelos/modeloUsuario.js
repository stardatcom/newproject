import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        ID: { type: String },
        nombre: { type: String },
        email: { type: String },
        contrasenia: { type: String },
        rolID: { type: String },
        estado: { type: Boolean },
    }
) 

export default model("Usuario", esquemaUsuario);