import ModeloRolUsuario from "../modelos/modeloRolUsuario.js";

const ControladorRolUsuario = {
    
leerRolUsuario: async (req, res) => {
    try {
        const rolUsuarioEncontrado = await ModeloRolUsuario.findById(req.params.id)
        if  (rolUsuarioEncontrado._id) {
            res.json({
                resuldado: "bien",
                mensaje: "rol usuario leído",
                datos: rolUsuarioEncontrado
        });
        }
       } catch (error) {
        res.json({
            resultado: "mal",
            mensaje: "ocurrió un error al leer el rol del usuario",
            datos: error
        });
       }
    },
}
export default ControladorRolUsuario;