const { Schema, model } = require('mongoose');
const VisitaSchema = Schema({
    horaEntrada: {
        type: String,
        required: true
    },
    // horaSalida: {
    //     type: String,
    //     required: true
    // },
    nombre: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    }
});
module.exports = model('Visita', VisitaSchema);