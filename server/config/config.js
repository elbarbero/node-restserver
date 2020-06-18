// ========================
//  PUERTO
// ========================
process.env.PORT = process.env.PORT || 3000; //si el puerto no existe, le ponemos el puerto 3000

// ========================
//  ENTORNO
// ========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
//  VENCIMIENTO DEL TOKEN
// ========================
// 60 segundos * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ========================
//  SEED DE AUTENTICACION
// ========================
// SEED es una variable de entorno en heroku
process.env.SEED = process.env.SEED || 'esta-es-la-seed-desarrollo';

// ========================
//  BASE DE DATOS
// ========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = 'mongodb+srv://strider:DqkhN8Yg70qVvsB3@cluster0-uljns.mongodb.net/cafe';
    urlDB = process.env.MONGO_URL; //ES LA VARIABLE DE ENTORNO QUE HEMOS CREADO Y SETEADO EN HEROKU
}

process.env.URLBD = urlDB;

