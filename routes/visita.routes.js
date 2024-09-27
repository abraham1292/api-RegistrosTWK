const { Router } = require('express');
const { check } = require('express-validator');
const { createRegistroVisitaController, getRegistroVisitaController,deleteVisitaController,updateVisitaController } = require('../controllers/visita.controler');
const validateFields = require('../middlewares/validate-fields');
const router = Router();
router.post(
    '/',
    [
        check('horaSalida', 'La hora de entrada es obligatorio').not().isEmpty(),
        check('horaEntrada', 'La hora de salida es obligatorio').not().isEmpty(),
        check('nombre', 'el nombre es obligatorio').not().isEmpty(),
        check('contacto', 'el nro contacto es obligatorio').not().isEmpty(),
        check('motivo', 'el motivo es obligatorio').not().isEmpty(),
        // check('password', 'El password debe ser de 6 caracteres').isLength({
        //     min: 6
        // }),
        validateFields
    ],
    createRegistroVisitaController
);
router.get('/', getRegistroVisitaController);
router.put('/:id',updateVisitaController);
router.delete('/:id',deleteVisitaController);
module.exports = router;
