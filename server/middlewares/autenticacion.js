const jwt = require('jsonwebtoken');

// ========================
//  VERIFICAR TOKEN
// ========================
let verificaToken = (req, res, next) => {
    let token = req.get('token'); // 'token' --> es el nombre que le hemos puesto a la variable que hay en los headers de la web ( con postman)
    /*res.json({
        mi_token: token
    });*/
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

// ========================
//  VERIFICAR ADMIN ROLE
// ========================
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;

    if(usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};


module.exports = {
    verificaToken,
    verificaAdminRole
}