const EmpresaExterna = require('../model/empresaExterna.model');
const CrearEmpresa = async (userData) => {
    const empresa = new EmpresaExterna(userData);
    await empresa.save();
    return empresa;
};
const getEmpresa = async () => {
    return await EmpresaExterna.find({}, 'nombreEmpresa numeroEmpresa motivo');
};
const deleteEmpresa = async(idEmpresa) =>{
    const result = await EmpresaExterna.findByIdAndDelete(idEmpresa); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateEmpresa = async(idEmpresa, updateData)=>{
    const empresaUpdate = await EmpresaExterna.findByIdAndUpdate(idEmpresa, updateData);
        // , { new: true });
    return empresaUpdate;
}
module.exports = {
    CrearEmpresa,
    getEmpresa,
    deleteEmpresa,
    updateEmpresa  
};