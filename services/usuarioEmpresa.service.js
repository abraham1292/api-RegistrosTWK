const UsuarioEmpresa = require('../model/usuarioEmpresa.model');
const CrearUsuarioEmpresa = async (userData) => {
    const usuarioEmpresa = new UsuarioEmpresa(userData);
    await usuarioEmpresa.save();
    return usuarioEmpresa;
};
const getUsuarioEmpresa = async () => {
    return await UsuarioEmpresa.find({}, 'rutUsuario nombres apellidoPaterno apellidoMaterno idEmpresa');
};
const deleteUsuarioEmpresa = async(idUsuario) =>{
    const result = await UsuarioEmpresa.findByIdAndDelete(idUsuario); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateUsuarioEmpresa = async(idUsuario, updateData)=>{
    const usuarioUpdate = await UsuarioEmpresa.findByIdAndUpdate(idUsuario, updateData);
        // , { new: true });
    return usuarioUpdate;
}
module.exports = {
    CrearUsuarioEmpresa,
    getUsuarioEmpresa,
    deleteUsuarioEmpresa,
    updateUsuarioEmpresa
};