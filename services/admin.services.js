const Admin = require('../model/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
       const payload = { uid };
       jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '12h' // El token expirará en 12 horas
       }, (err, token) => {
          if (err) {
             reject('No se pudo generar el token');
          }
          resolve(token);
       });
    });
 };
const createAdmin = async (userData) => {
    // Encriptar la contraseña
   const salt = bcrypt.genSaltSync();
   userData.password = bcrypt.hashSync(userData.password, salt);
    
    const user = new Admin(userData);
    await user.save();

    const token = await generateJWT(user._id);

    return { user, token };
    //return user;
};
const getAdmin = async () => {
    return await Admin.find({}, 'name email');
};
const deleteAdmin= async(AdminId) =>{
    const result = await Admin.findByIdAndDelete(AdminId); //await solo se usa en funciones asincronas o que sean promesas!!!
    return result;
}
const updateAdmin = async(AdminId, updateData)=>{
    const adminUpdate = await Admin.findByIdAndUpdate(AdminId, updateData);
        // , { new: true });
    return adminUpdate;
}
module.exports = {
    createAdmin,
    getAdmin,
    deleteAdmin,
    updateAdmin,
    generateJWT
};