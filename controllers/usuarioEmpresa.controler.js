const { response } = require('express');
const { CrearUsuarioEmpresa, getUsuarioEmpresa ,deleteUsuarioEmpresa, updateUsuarioEmpresa} = require('../services/usuarioEmpresa.service');

const createUsuarioEmpresaController = async (req, res = response) => {
    try {
        const user = await CrearUsuarioEmpresa(req.body);
        res.status(201).json({
            ok: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create usuario failed'
        });
    }
};
const getUsuarioEmpresaController = async (req, res = response) => {
    try {
        const users = await getUsuarioEmpresa();
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
const deleteUsuarioEmpresaController = async (req, res = response) => {
    try {
        const idUsuario = req.params.id;
        const deleteData = await deleteUsuarioEmpresa(idUsuario);
        res.status(200).json({
            ok: true,
            msg: 'usuario eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'delete usuario failed'
        });
    }
};

const updateUsuarioEmpresaController = async (req, res) => {
    try {
        const idUsuario = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedUsuario = await updateUsuarioEmpresa(idUsuario, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'Usuario actualizado exitosamente',
            docente: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el Usuario',
            error: error.message 
        });
    }
};
module.exports = {
    createUsuarioEmpresaController,
    getUsuarioEmpresaController,
    deleteUsuarioEmpresaController,
    updateUsuarioEmpresaController
};