import ModeloOrdenDetrabajo from '../modelos/modeloOrdenDeTrabajo.js'

const ControladorOrdenDetrabajo = {
    crearOrdenDeTrabajo: async (req, res) => {
        try {
            const { ID, descripcion, listaHerramienta, listaBodega, fecha, IDusuario } = req.body;
            const nuevaOrdenDeTrabajo = new ModeloOrdenDetrabajo({
                ID,
                descripcion,
                listaHerramienta,
                listaBodega,
                fecha,
                IDusuario,
                })
            const ordenDeTrabajoCreado = await nuevaOrdenDeTrabajo.save();
            if (ordenDeTrabajoCreado._id) {
                res.json({
                    resulatdo: 'bien',
                    mensaje: 'orden de trabajo creada',
                    datos: null,
                });
            }    
            
        } catch (error) {
            res.json({
              resultado: 'mal',
              mensaje: 'ocurrio un error al crear la orden de trabajo',
              datos: error,
            });
        }
},
leerOrdenDeTrabajo: async (req, res) => {
    try {
        const ordenDeTrabajoEncontrado = await ModeloOrdenDetrabajo.findById(req.params.id)
        if  (ordenDeTrabajoEncontrado._id) {
            res.json({
                resuldado: "bien",
                mensaje: "orden de trabajo leído",
                datos: ordenDeTrabajoEncontrado
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
    leerOrdenesDeTrabajo: async (req, res) => { 
        try {
              const todasLasOrdenesDeTrabajo = await ModeloOrdenDetrabajo.find(); 
                res.json({
                    resuldado: "bien",
                    mensaje: "ordenes de trabajo leídas",
                    datos: todasLasOrdenesDeTrabajo
            });
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al leer todas las ordenes de trabajo",
                datos: error
            });
           }
    },
    eliminarOrdenDeTrabajo: async (req, res) => {
        try {
            const ordenDeTrabajoEliminada = await ModeloOrdenDetrabajo.findByIdAndDelete(req.params.id)
            if (ordenDeTrabajoEliminada._id) {
                res.json({
                    resuldado: "bien",
                    mensaje: "orden de trabajo eliminada",
                    datos: null
            });
            }
           } catch (error) {
            res.json({
                resultado: "mal",
                mensaje: "ocurrió un error al eliminar la orden de trabajo",
                datos: error
            });
    }
}
}

export default ControladorOrdenDetrabajo;