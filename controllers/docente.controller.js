const { response } = require('express');
const { CrearDocente, getDocente, deleteDocente, updateDocente  } = require('../services/docente.services');

const createDocenteController = async (req, res = response) => {
    try {
        const docente = await CrearDocente(req.body);
        res.status(201).json({
            ok: true,
            docente
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create docente failed'
        });
    }
};
const getDocenteController = async (req, res = response) => {
    try {
        const docentes = await getDocente();
        res.status(200).json({
            ok: true,
            docentes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get docentes failed'
        });
    }
};
const deleteDocenteController = async (req, res = response) => {
    try {
        const idDocente = req.params.id;
        const deleteData = await deleteDocente(idDocente);
        res.status(200).json({
            ok: true,
            msg: 'docente eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'delete docentes failed'
        });
    }
};

const updateDocenteController = async (req, res) => {
    try {
        const docenteId = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedDocente = await updateDocente(docenteId, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'docente actualizado exitosamente',
            docente: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el doecente',
            error: error.message 
        });
    }
};


module.exports = {
    createDocenteController,
    getDocenteController,
    deleteDocenteController,
    updateDocenteController
};