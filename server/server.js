require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('colors/safe');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));

// 27017 --> Este el puerto en el que está mongoDB
mongoose.connect(process.env.URLBD, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, 
    (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log(colors.green('------- BASE DE DATOS ONLINE -------'));
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});