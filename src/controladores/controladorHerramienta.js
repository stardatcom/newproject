import ModeloHerramienta from "../modelos/modeloHerramienta.js";

const ControladorHerramienta = {
    
leerHerramienta: async (req, res) => {
    try {
        const herramientaEncontrado = await ModeloHerramienta.findById(req.params.id)
        if  (herramientaEncontrado._id) {
            res.json({
                resuldado: "bien",
                mensaje: "usuario leído",
                datos: herramientaEncontrado
        });
        }
       } catch (error) {
        res.json({
            resultado: "mal",
            mensaje: "ocurrió un error al leer la herramienta",
            datos: error
        });
       }
    },
    actualizarHerramienta: async (req, res) => {
        try {
            const herramientaActualizado = await ModeloHerramienta.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "herramienta actualizado",
                    datos: herramientaActualizado._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar herramienta",
                datos: error
            });
           }
    }
}
export default ControladorHerramienta;