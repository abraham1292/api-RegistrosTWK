const Visita = require('../model/visita.model');
const RegistroVisita = async (userData) => {
    const visita = new Visita(userData);
    await visita.save();
    return visita;
};
const getVisita = async () => {
    return await Visita.find({}, 'horaEntrada horaSalida nombre contacto motivo');
};
const deleteVisita = async(idRegistroVisita) =>{
    const result = await Visita.findByIdAndDelete(idRegistroVisita); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateVisita = async(idRegistroVisita, updateData)=>{
    const registroUpdate = await Visita.findByIdAndUpdate(idRegistroVisita, updateData);
        // , { new: true });
    return registroUpdate;
}
module.exports = {
    RegistroVisita,
    getVisita,
    deleteVisita,
    updateVisita
};