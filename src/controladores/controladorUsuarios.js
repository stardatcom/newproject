const ControladorUsuarios = {
    crearUsuario: async (req, res) => {
        try {
         console.log("Solicitud: ", req.body);
         if (req.body.nombre === "") throw new Error("falta el nombre");
         if (req.body.apellido === "") throw new Error("falta el apellido");
         if (req.body.email === "") throw new Error("falta el email");
         if (req.body.contrasenia === "") throw new Error("falta la contraseña");
         if (req.body.confirmarContrasenia === "") throw new Error("falta confirmar la contraseña");
         if (req.body.foto === "") throw new Error("falta la foto");
         if (req.body.pais === "") throw new Error("falta el pais");
         res.json({mensaje: "POST crear usuario works!"});
        } catch (error) {
            console.log("error :", error);
            res.json({error: true, mensaje: "ocurrió un error al crear usuario"});
        }
    },
    leerUsuario: async (req, res) => {
        try {
            console.log(req.params.id);
            res.json({mensaje: "GET leer usuario works!"});
           } catch (error) {
               console.log("error :", error);
               res.json({error: true, mensaje: "ocurrió un error al leer usuario"});
           }
    },
    leerUsuarios: async (req, res) => { 
        try {
            res.json({mensaje: "GET leer todos los usuarios works!"});
           } catch (error) {
               console.log("error :", error);
               res.json({error: true, mensaje: "ocurrió un error al leer todos los usuarios"});
           }
    },
    actualizarUsuario: async (req, res) => {
        try {
            console.log("id; ", req.params.id);
            console.log("solicitud body: ", req.body)
            res.json({mensaje: "PUT actualizar usuario works!"});
           } catch (error) {
               console.log("error :", error);
               res.json({error: true, mensaje: "ocurrió un error al actualizar  usuario"});
           }
    },
    eliminarUsuario: async (req, res) => {
        try {
            console.log("id; ", req.params.id);
            res.json({mensaje: "DELETE eliminar usuario works!"});
           } catch (error) {
               console.log("error :", error);
               res.json({error: true, mensaje: "ocurrió un error al eliminar  usuario"});
           }
        
    },
}

export default ControladorUsuarios;

// Estoesusado es usado para obtener los datos y crear/actualizar usuarios desde postman
/*
const usuario = {
    nombre: "pepita",
    apellido: "pérez",
    email: "tal1@bit.com",
    contrasenia: "asd",
    confirmarContrasenia: "asd",
    foto: "",
    pais: "Colombia",
    id: "",
}
*/