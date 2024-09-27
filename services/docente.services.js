const Docente = require('../model/docente.model');
const CrearDocente = async (userData) => {
    const docente = new Docente(userData);
    await docente.save();
    return docente;
};
const getDocente = async () => {
    return await Docente.find({}, 'nombres apellidoPaterno apellidoMaterno carrera');
};

const deleteDocente = async(docenteId) =>{
    const result = await Docente.findByIdAndDelete(docenteId); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateDocente = async(docenteId, updateData)=>{
    const docenteUpdate = await Docente.findByIdAndUpdate(docenteId, updateData);
        // , { new: true });
    return docenteUpdate;
}
module.exports = {
    CrearDocente,
    getDocente,
    deleteDocente,
    updateDocente
};