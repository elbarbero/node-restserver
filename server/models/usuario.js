const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

// definimos la tabla de usuarios de la BBDD
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'] // si es falso nos muestra ese mensaje
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La conttraseña es obligatorio']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: String,
        default: false
    },
});

// Esto lo hacemos para no mostrar la información de la contraseña en la respuesta del POST, cuando crea el usuario
usuarioSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

/* A continuacion le decimos en nombre de la tabla de la BBDD (Usuario) 
y de donde va a coger la configuracion de la tabla (usuarioSchema)*/
module.exports = mongoose.model('Usuario', usuarioSchema);