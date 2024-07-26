import { Schema, model } from "mongoose";

const esquemaRolUsuario = new Schema(
    {
        ID: { type: String, required: true },
        nombreRol: { type: String, required: true },
    }
) 

export default model("RolUsuario", esquemaRolUsuario);