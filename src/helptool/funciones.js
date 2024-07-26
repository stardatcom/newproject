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

/* export function verificarToken(token) {
    return new Promise((res, eje) => {
      jwt.verify(token, 'llave secreta', (error, decodificado) => {
        if (error) {
          eje(error);
        } else {
          res(decodificado);
        }
      });
    });
  } */
  export const verificarToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(403).send({ message: 'No token provided!' });
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: 'Unauthorized!' });
      }
      req.userId = decoded.id;
      req.userRole = decoded.role;
      next();
    });
  };
  
  const isAdmin = (req, res, next) => {
    if (req.userRole === 'admin') {
      next();
    } else {
      res.status(403).send({ message: 'Require Admin Role!' });
    }
  };
  
  const isUser = (req, res, next) => {
    if (req.userRole === 'user' || req.userRole === 'admin') {
      next();
    } else {
      res.status(403).send({ message: 'Require User Role!' });
    }
  };
  