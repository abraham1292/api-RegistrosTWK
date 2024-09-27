const { Router } = require('express');
const { check } = require('express-validator');
const { createEmpresaController, getEmpresaController,deleteEmpresaController,updateEmpresaController } = require('../controllers/empresaExterna.controler');
const validateFields = require('../middlewares/validate-fields');
const router = Router();
router.post(
    '/',
    [
        check('nombreEmpresa', 'La nombreEmpresa es obligatorio').not().isEmpty(),
        check('numeroEmpresa', 'La numeroEmpresa es obligatorio').not().isEmpty(),
        check('motivo', 'el motivo es obligatorio').not().isEmpty(),
        validateFields
    ],
    createEmpresaController
);
router.get('/', getEmpresaController);
router.put('/:id',updateEmpresaController);
router.delete('/:id',deleteEmpresaController);
module.exports = router;
