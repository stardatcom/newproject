import ModeloTomaHerramienta from "../modelos/modeloTomaHeramienta.js";

const ControladorTomaHerramienta = {
    crearTomaHerramineta: async (req, res) => {
        try {
            const { nombre, eventoEnDesarrollo, estadoFisico } = req.body;
            const nuevaTomaHerramienta = new ModeloTomaHerramienta({
                nombre,
                eventoEnDesarrollo,
                estadoFisico,
                })
            const tomaHerramientaCreada = await nuevaTomaHerramienta.save();
            if (tomaHerramientaCreada._id) {
                res.json({
                    resultado: 'bien',
                    mensaje: 'Heramienta tomada',
                    datos: null,
                });
            }    
            
        } catch (error) {
            res.json({
              resultado: 'mal',
              mensaje: 'ocurrio un error al crear la toma de herramineta',
              datos: error,
            });
        }
},
    leerTomaHerramienta: async (req, res) => {
        try {
            const tomaHerramientaEncontrada = await ModeloTomaHerramienta.findById(req.params.id)
            if  (tomaHerramientaEncontrada._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "Herramienta leída",
                    datos: tomaHerramientaEncontrada
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer la toma de herramienta",
                datos: error
            });
           }
    },
    leerTomaHerramientas: async (req, res) => { 
        try {
              const todasLasHerramientasTomadas = await ModeloTomaHerramienta.find(); 
                res.json({
                    resuldado: "bien",
                    mensaje: "todas las herramientas tomadas leídas",
                    datos: todasLasHerramientasTomadas
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer todas las herramientas tomadas",
                datos: error
            });
           }
    },
    actualizarHerramientaTomada: async (req, res) => {
        try {
            const tomaHerramientaActualizada = await ModeloTomaHerramienta.findByIdAndUpdate(
                req.params.id,
                req.body
            );
                
            res.json({
                    resuldado: "bien",
                    mensaje: "toma de herramienta actualizada",
                    datos: tomaHerramientaActualizada._id,
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al actualizar la toma de herramienta",
                datos: error
            });
           }
    },
    eliminarTomaHerramienta: async (req, res) => {
        try {
            const tomaHerramientaEliminada = await ModeloTomaHerramienta.findByIdAndDelete(req.params.id)
            if (tomaHerramientaEliminada._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "toma de herramienta eliminada",
                    datos: null
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al eliminar la toma de herramienta",
                datos: error
            });
    }
}
}

export default ControladorTomaHerramienta;