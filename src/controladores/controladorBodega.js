import ModeloBodega from "../modelos/modeloBodega.js";

const ControladorBodega = {
    
leerBodega: async (req, res) => {
    try {
        const bodegaEncontrado = await ModeloBodega.findById(req.params.id)
        if  (bodegaEncontrado._id) {
            res.json({
                resuldado: "bien",
                mensaje: "bodega leído",
                datos: bodegaEncontrado
        });
        }
       } catch (error) {
        res.json({
            resultado: "mal",
            mensaje: "ocurrió un error al leer la bodega",
            datos: error
        });
       }
    },
    actualizarBodega: async (req, res) => {
        try {
            const bodegaActualizado = await ModeloBodega.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "bodega actualizado",
                    datos: bodegaActualizado._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar bodega",
                datos: error
            });
           }
    }
}
export default ControladorBodega;