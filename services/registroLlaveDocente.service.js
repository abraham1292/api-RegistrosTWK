const RegistroLlave = require('../model/registroLlaveDocente.model');
const RegistroLlaveDocente = async (userData) => {
    const visita = new RegistroLlave(userData);
    await visita.save();
    return visita;
};
const getRegistroLlave = async () => {
    return await RegistroLlave.find({}, 'rutDocente sala');
};
const deleteRegistroLlave = async(idRegistroLlave) =>{
    const result = await RegistroLlave.findByIdAndDelete(idRegistroLlave); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateRegistroLlave = async(idRegistroLlave, updateData)=>{
    const registroUpdate = await RegistroLlave.findByIdAndUpdate(idRegistroLlave, updateData);
        // , { new: true });
    return registroUpdate;
}
module.exports = {
    RegistroLlaveDocente,
    getRegistroLlave,
    deleteRegistroLlave,
    updateRegistroLlave
};