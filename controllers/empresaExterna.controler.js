const { response } = require('express');
const { CrearEmpresa,getEmpresa, deleteEmpresa, updateEmpresa  } = require('../services/empresaExterna.service');

const createEmpresaController = async (req, res = response) => {
    try {
        const user = await CrearEmpresa(req.body);
        res.status(201).json({
            ok: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Create empresa failed'
        });
    }
};
const getEmpresaController = async (req, res = response) => {
    try {
        const empresas = await getEmpresa();
        res.status(200).json({
            ok: true,
            empresas
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Get empresa failed'
        });
    }
};

const deleteEmpresaController = async (req, res = response) => {
    try {
        const idEmpresa = req.params.id;
        const deleteData = await deleteEmpresa(idEmpresa);
        res.status(200).json({
            ok: true,
            msg: 'empresa eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'delete empresa failed'
        });
    }
};

const updateEmpresaController = async (req, res) => {
    try {
        const idEmpresa = req.params.id;
        const updateData = req.body; // Obtiene los datos de actualización del cuerpo de la solicitud

        let updatedEmpresa = await updateEmpresa(idEmpresa, updateData);

        // Retornar una respuesta exitosa
        res.status(200).json({ 
            message: 'empresa actualizado exitosamente',
            docente: updateData
            // user: updatedUser
        });
    } catch (error) {
        // Retornar una respuesta de error
        res.status(500).json({ 
            message: 'Error al actualizar el empresa',
            error: error.message 
        });
    }
};
module.exports = {
    createEmpresaController,
    getEmpresaController,
    deleteEmpresaController,
    updateEmpresaController
};