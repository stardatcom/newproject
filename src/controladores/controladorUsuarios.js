const ContoladorUsuarios = {
    crearUsuario: (req, res) => {
        res.json({mensaje: "POST usuario works!"});
    },
    leerUsuario: (req, res) => {
        res.json({mensaje: "GET usuario works!"});
    },
    leerUsuarios: (req, res) => {
        res.json({mensaje: "GET usuarios works!"});
    },
    actualizarUsuario: (req, res) => {
        res.json({mensaje: "PUT usuario works!"});
    },
    eliminarUsuario: (req, res) => {
        res.json({mensaje: "DELETE usuario works!"});
    },
}

export default ContoladorUsuarios;