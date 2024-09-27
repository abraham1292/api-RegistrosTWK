const { response } = require('express');
const { createAdmin, getAdmin,deleteAdmin,updateAdmin } = require('../services/admin.services');

const createAdminController = async (req, res = response) => {
    try {
        const { user, token } = await createAdmin(req.body);
        res.status(201).json({
            ok: true,
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create user failed'
        });
    }
};
const getAdminController = async (req, res = response) => {
    try {
        const users = await getAdmin();
        res.status(200).json({
            ok: true,
            users
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get users failed'
        });
    }
};
const deleteAdminController = async (req, res = response) => {
    try {
        const idAdmin = req.params.id;
        const deleteData = await deleteAdmin(idAdmin);
        res.status(200).json({
            ok: true,
            msg: 'Admin eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'delete Admin failed'
        });
    }
};

const updateAdminController = async (req, res) => {
    try {
        const idAdmin = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedUsuario = await updateAdmin(idAdmin, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'Admin actualizado exitosamente',
            Admin: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el Admin',
            error: error.message 
        });
    }
};
module.exports = {
    createAdminController,
    getAdminController,
    deleteAdminController,
    updateAdminController
};
