// ========================
//    PUERTO
// ========================
process.env.PORT = process.env.PORT || 3000; //si el puerto no existe, le ponemos el puerto 3000

// ========================
//    ENTORNO
// ========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
//    BASE DE DATOS
// ========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://strider:DqkhN8Yg70qVvsB3@cluster0-uljns.mongodb.net/cafe';
}

process.env.URLBD = urlDB;

