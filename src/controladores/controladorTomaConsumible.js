import ModeloTomaConsumible from "../modelos/modeloTomaConsumible.js";

const ControladorTomaConsumible = {
    crearTomaConsumible: async (req, res) => {
        try {
            const { nombre, eventoEnDesarrollo, cantidad } = req.body;
            const nuevaTomaConsumible = new ModeloTomaConsumible({
                nombre,
                eventoEnDesarrollo,
                cantidad,
                })
            const tomaConsumibleCreado = await nuevaTomaConsumible.save();
            if (tomaConsumibleCreado._id) {
                res.json({
                    resultado: 'bien',
                    mensaje: 'consumible tomado',
                    datos: null,
                });
            }    
            
        } catch (error) {
            res.json({
              resultado: 'mal',
              mensaje: 'ocurrio un error al crear la toma de consumible',
              datos: error,
            });
        }
},
    leerTomaConsumible: async (req, res) => {
        try {
            const tomaConsumibleEncontrado = await ModeloTomaConsumible.findById(req.params.id)
            if  (tomaConsumibleEncontrado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "consumible leído",
                    datos: tomaConsumibleEncontrado
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer la toma de consumible",
                datos: error
            });
           }
    },
    leerTomaConsumibles: async (req, res) => { 
        try {
              const todosLosConsumiblesTomados = await ModeloTomaConsumible.find(); 
                res.json({
                    resuldado: "bien",
                    mensaje: "todos las consumibles tomadas leídas",
                    datos: todosLosConsumiblesTomados
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer todos las consumibles tomados",
                datos: error
            });
           }
    },
    actualizarConsumibleTomado: async (req, res) => {
        try {
            const tomaConsumibleActualizado = await ModeloTomaConsumible.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "toma de consumible actualizado",
                    datos: tomaConsumibleActualizado._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar la toma de consumible",
                datos: error
            });
           }
    },
    eliminarTomaConsumible: async (req, res) => {
        try {
            const tomaConsumibleEliminado = await ModeloTomaConsumible.findByIdAndDelete(req.params.id)
            if (tomaConsumibleEliminado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "toma de consumible eliminado",
                    datos: null
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al eliminar la toma de consumible",
                datos: error
            });
    }
}
}

export default ControladorTomaConsumible;
