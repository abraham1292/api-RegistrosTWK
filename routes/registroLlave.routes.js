const { Router } = require('express');
const { check } = require('express-validator');
const { createRegistoLlaveController, getRegistroLlaveController ,deleteRegistroLlaveController,updateRegistroLlaveController} = require('../controllers/registroLlaveDocente.controler');
const validateFields = require('../middlewares/validate-fields');
const router = Router();
router.post(
    '/',
    [
        check('idDocente', 'el idDocente es obligatorio').not().isEmpty(),
        check('sala', 'La sala es obligatorio').not().isEmpty(),
        check('horaEntrada', 'La horaEntrada es obligatorio').not().isEmpty(),
        check('horaEntrada', 'La horaEntrada es obligatorio').not().isEmpty(),
        validateFields
    ],
    createRegistoLlaveController
);
router.get('/', getRegistroLlaveController);
router.put('/:id',updateRegistroLlaveController);
router.delete('/:id',deleteRegistroLlaveController);
module.exports = router;
