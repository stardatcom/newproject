import bcryptjs from "bcryptjs";
import { generarToken, verificarToken } from "../helptool/funciones.js";
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorInicioSesion = {
  iniciarSesion: async (req, res) => {
    try {
      const { usuario, password } = req.body;
      const usuarioEncontrado = await ModeloUsuario.findOne({
        email: usuario,
      });
      const contraseniaValidada = await bcryptjs.compare(
        password,
        usuarioEncontrado.contrasenia
      );
      if (contraseniaValidada) {
        const token = await generarToken({
          id: usuarioEncontrado._id,
          nombre: usuarioEncontrado.nombre,
        });
        console.log(usuarioEncontrado);
        res.json({
          resultado: "bien",
          mensaje: "acceso permitido",
          datos: { token: token, rolID: usuarioEncontrado.rolID },
        });
      } else {
        res.json({
          resultado: "mal",
          mensaje: "acceso denegado",
          datos: null,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al iniciar sesión",
        datos: error,
      });
    }
  },
  validarToken: async (req, res) => {
    try {
      const token = req.params.token;
      const decodificado = await verificarToken(token);
      if (decodificado.id) {
        res.json({
          resultado: "bien",
          mensaje: "token válido",
          datos: decodificado,
        });
      } else {
        res.json({
          resultado: "mal",
          mensaje: "token no válido",
          datos: null,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al validar token",
        datos: error,
      });
    }
  },
};

export default ControladorInicioSesion;
