const { response } = require('express');
const { RegistroLlaveDocente, getRegistroLlave ,deleteRegistroLlave,updateRegistroLlave } = require('../services/registroLlaveDocente.service');

const createRegistoLlaveController = async (req, res = response) => {
    try {
        const user = await RegistroLlaveDocente(req.body);
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
const getRegistroLlaveController = async (req, res = response) => {
    try {
        const users = await getRegistroLlave();
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
const deleteRegistroLlaveController = async (req, res = response) => {
    try {
        const idUsuario = req.params.id;
        const deleteData = await deleteRegistroLlave(idUsuario);
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

const updateRegistroLlaveController = async (req, res) => {
    try {
        const idregistro = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedregistroLlave = await updateRegistroLlave(idregistro, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'Registro actualizado exitosamente',
            docente: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el Registro',
            error: error.message 
        });
    }
};


module.exports = {
    createRegistoLlaveController,
    getRegistroLlaveController,
    deleteRegistroLlaveController,
    updateRegistroLlaveController

};