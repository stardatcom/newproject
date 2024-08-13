import ModeloRetornoConsumible from "../modelos/modeloRetornoConsumible.js";

const ControladorRetornoConsumible = {
    crearRetornoConsumible: async (req, res) => {
        try {
            const { nombre, eventoEnDesarrollo, cantidad } = req.body;
            const nuevoRetornoConsumible = new ModeloRetornoConsumible({
                nombre,
                eventoEnDesarrollo,
                cantidad,
                })
            const retornoConsumibleCreado = await nuevoRetornoConsumible.save();
            if (retornoConsumibleCreado._id) {
                res.json({
                    resultado: 'bien',
                    mensaje: 'consumible retornado',
                    datos: null,
                });
            }    
            
        } catch (error) {
            res.json({
              resultado: 'mal',
              mensaje: 'ocurrio un error al crear el retorno de consumible',
              datos: error,
            });
        }
},
    leerRetornoConsumible: async (req, res) => {
        try {
            const retornoConsumibleEncontrado = await ModeloRetornoConsumible.findById(req.params.id)
            if  (retornoConsumibleEncontrado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "consumible leída",
                    datos: retornoConsumibleEncontrado
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer el retorno de consumible",
                datos: error
            });
           }
    },
    leerRetornoConsumibles: async (req, res) => { 
        try {
              const todosLosConsumiblesRetornados = await ModeloRetornoConsumible.find(); 
                res.json({
                    resuldado: "bien",
                    mensaje: "todos los consumibles retornadaos leídos",
                    datos: todosLosConsumiblesRetornados
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer todos las consumible retornados",
                datos: error
            });
           }
    },
    actualizarConsumibleRetornado: async (req, res) => {
        try {
            const retornoConsumibleActualizado = await ModeloRetornoConsumible.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "retorno de consumible actualizado",
                    datos: retornoConsumibleActualizado._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar el retorno de consumible",
                datos: error
            });
           }
    },
    eliminarRetornoConsumible: async (req, res) => {
        try {
            const retornoConsumibleEliminado = await ModeloRetornoConsumible.findByIdAndDelete(req.params.id)
            if (retornoConsumibleEliminado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "retorno de consumible eliminado",
                    datos: null
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al eliminar el retorno de consumible",
                datos: error
            });
    }
}
}

export default ControladorRetornoConsumible;