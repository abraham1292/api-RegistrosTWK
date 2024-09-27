const { Schema, model } = require('mongoose');
const empresaExternaSchema = Schema({
    nombreEmpresa: {
        type: String,
        required: true
    },
    numeroEmpresa: {
        type: String
    },
    motivo: {
        type: String,
        required: true
    },
    sala:{
        type:String,
        required:true
    }
});
module.exports = model('EmpresaExterna', empresaExternaSchema);