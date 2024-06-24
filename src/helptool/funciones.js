import jwt  from 'jsonwebtoken';

export function generarToken(payload) {
    return  new Promise((res, eje)=>{
        jwt.sign(payload, "llave secreta", { expiresIn: "1h" }, (error, token)=>{
            if (error) {
                eje({ error });
            } else {
                res({ token });
            }
        });
    });
}

export function verificarToken(token) {
    return new Promise((res, eje) => {
      jwt.verify(token, 'llave secreta', (error, decodificado) => {
        if (error) {
          eje(error);
        } else {
          res(decodificado);
        }
      });
    });
  }