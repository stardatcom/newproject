import bcrypt from "bcryptjs";
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
  crearUsuario: async (req, res) => {
    try {
      const { contrasenia } = req.body;
      const contraseniaProtegida = await bcrypt.hash(contrasenia, 10);
      const nuevoUsuario = new ModeloUsuario({
        ...req.body,
        contrasenia: contraseniaProtegida,
      });
      const usuarioCreado = await nuevoUsuario.save();
      if (usuarioCreado._id) {
        res.json({
          resultado: "bien",
          mensaje: "usuario creado",
          datos: usuarioCreado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al crear usuario",
        datos: error,
      });
    }
  },
  leerUsuario: async (req, res) => {
    try {
      const usuarioEncontrado = await ModeloUsuario.findById(req.params.id);
      if (usuarioEncontrado._id) {
        res.json({
          resuldado: "bien",
          mensaje: "usuario leído",
          datos: usuarioEncontrado,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer usuario",
        datos: error,
      });
    }
  },
  leerUsuarios: async (req, res) => {
    try {
      const todosLosUsuarios = await ModeloUsuario.find();
      res.json({
        resuldado: "bien",
        mensaje: "usuarios leídos",
        datos: todosLosUsuarios,
      });
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer todos los usuarios",
        datos: error,
      });
    }
  },
  actualizarUsuario: async (req, res) => {
    try {

      const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        { upsert: true }
      );

      res.json({
        resuldado: "bien",
        mensaje: "usuario actualizado",
        datos: usuarioActualizado,
      });
    } catch (error) {
      console.log(error);
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al actualizar usuario",
        datos: error,
      });
    }
  },
};

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
