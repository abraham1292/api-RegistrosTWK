const { Schema, model } = require('mongoose');
const RegistroLlaveSchema = Schema({
    //rutDocente
    idDocente: {
        type: String,
        required: true
    },
    sala: {
        type: String,
        required: true,
    },
    horaEntrada: {
        type: String,
        required: true,
    },
    horaTermino: {
        type: String,
        required: true,
    }
});
module.exports = model('RegistroLlave', RegistroLlaveSchema);