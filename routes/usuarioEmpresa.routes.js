const { Router } = require('express');
const { check } = require('express-validator');
const { createUsuarioEmpresaController, getUsuarioEmpresaController,deleteUsuarioEmpresaController,updateUsuarioEmpresaController } = require('../controllers/usuarioEmpresa.controler');
const validateFields = require('../middlewares/validate-fields');
const router = Router();
router.post(
    '/',
    [
        check('rutUsuario', 'La rutUsuario es obligatorio').not().isEmpty(),
        check('nombres', 'La nombres es obligatorio').not().isEmpty(),
        check('apellidoPaterno', 'el apellidoPaterno es obligatorio').not().isEmpty(),
        check('apellidoMaterno', 'el apellidoMaterno es obligatorio').not().isEmpty(),
        check('idEmpresa', 'el idEmpresa es obligatorio').not().isEmpty(),
        validateFields
    ],
    createUsuarioEmpresaController
);
router.get('/', getUsuarioEmpresaController);
router.put('/:id',updateUsuarioEmpresaController);
router.delete('/:id',deleteUsuarioEmpresaController);
module.exports = router;
