const { Schema, model } = require('mongoose');
const usuarioEmpresaSchema = Schema({
    // rutUsuario: {
    //     type: String,
    //     required: true
    // },
    nombres: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    idEmpresa: {
        type: String,
        required: true
    },
    sePresento: {
        type: Boolean,
        required: true,
        default: false // Valor por defecto
    }
});
module.exports = model('UsuarioEmpresa', usuarioEmpresaSchema);