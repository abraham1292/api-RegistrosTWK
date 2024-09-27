const { Router } = require('express');
const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validate-jwt');
const { createAdminController, getAdminController,deleteAdminController,updateAdminController } = require('../controllers/admin.controller');
const validateFields = require('../middlewares/validate-fields');

const router = Router();
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({
            min: 6
        }),
        validateFields
    ],
    createAdminController
);
router.get('/', getAdminController, validateJWT);
router.put('/:id',updateAdminController);
router.delete('/:id',deleteAdminController);

module.exports = router;
