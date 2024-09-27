const { response } = require('express');
const { RegistroVisita, getVisita,deleteVisita,updateVisita } = require('../services/visita.service');
const createRegistroVisitaController = async (req, res = response) => {
    try {
        const registro = await RegistroVisita(req.body);
        res.status(201).json({
            ok: true,
            registro
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create registro failed'
        });
    }
};
const getRegistroVisitaController = async (req, res = response) => {
    try {
        const visitas = await getVisita();
        res.status(200).json({
            ok: true,
            visitas
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get users failed'
        });
    }
};
const deleteVisitaController = async (req, res = response) => {
    try {
        const idVisita = req.params.id;
        const deleteData = await deleteVisita(idVisita);
        res.status(200).json({
            ok: true,
            msg: 'registro eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'delete registro failed'
        });
    }
};

const updateVisitaController = async (req, res) => {
    try {
        const idVisita = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedUsuario = await updateVisita(idVisita, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'registro actualizado exitosamente',
            docente: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el registro',
            error: error.message 
        });
    }
};
module.exports = {
    createRegistroVisitaController,
    getRegistroVisitaController,
    deleteVisitaController,
    updateVisitaController
};