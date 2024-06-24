import ModeloRetornoHerramienta from "../modelos/modeloRetornoHerramienta.js";

const ControladorRetornoHerramienta = {
    crearRetornoHerramineta: async (req, res) => {
        try {
            const { nombre, eventoEnDesarrollo, estadoFisico } = req.body;
            const nuevoRetornoHerramienta = new ModeloRetornoHerramienta({
                nombre,
                eventoEnDesarrollo,
                estadoFisico,
                })
            const retornoHerramientaCreado = await nuevoRetornoHerramienta.save();
            if (retornoHerramientaCreado._id) {
                res.json({
                    resulatdo: 'bien',
                    mensaje: 'heramienta retornada',
                    datos: null,
                });
            }    
            
        } catch (error) {
            res.json({
              resultado: 'mal',
              mensaje: 'ocurrio un error al crear el retorno de herramineta',
              datos: error,
            });
        }
},
    leerRetornoHerramienta: async (req, res) => {
        try {
            const retornoHerramientaEncontrado = await ModeloRetornoHerramienta.findById(req.params.id)
            if  (retornoHerramientaEncontrado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "herramienta leída",
                    datos: retornoHerramientaEncontrado
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer el retorno de herramineta",
                datos: error
            });
           }
    },
    leerRetornoHerramientas: async (req, res) => { 
        try {
              const todasLasHerramientasRetornadas = await ModeloRetornoHerramienta.find(); 
                res.json({
                    resuldado: "bien",
                    mensaje: "todas las herramientas retornadas leídas",
                    datos: todasLasHerramientasRetornadas
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer todas las herramientas retornadas",
                datos: error
            });
           }
    },
    actualizarHerramientaRetornada: async (req, res) => {
        try {
            const retornoHerramientaActualizado = await ModeloRetornoHerramienta.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "retorno de herramienta actualizado",
                    datos: retornoHerramientaActualizado._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar el retorno de herramineta",
                datos: error
            });
           }
    },
    eliminarRetornoHerramienta: async (req, res) => {
        try {
            const retornoHerramientaEliminado = await ModeloRetornoHerramienta.findByIdAndDelete(req.params.id)
            if (retornoHerramientaEliminado._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "retorno de herramienta eliminado",
                    datos: null
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al eliminar el retorno de herramineta",
                datos: error
            });
    }
}
}

export default ControladorRetornoHerramienta;