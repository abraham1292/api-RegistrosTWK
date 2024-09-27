const { Schema, model } = require('mongoose');
const docenteSchema = Schema({
    // idDocente: {
    //     type: String,
    //     required: true
    // },
    Nombres: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    }
});
module.exports = model('Docente', docenteSchema);