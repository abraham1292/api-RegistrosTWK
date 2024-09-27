const { Router } = require('express');
const { check } = require('express-validator');
const { createDocenteController, getDocenteController ,deleteDocenteController, updateDocenteController } = require('../controllers/docente.controller');
const validateFields = require('../middlewares/validate-fields');
const router = Router();
router.post(
    '/',
    [
        // check('rutDocente', 'La rutDocente es obligatorio').not().isEmpty(),
        check('nombres', 'La nombres es obligatorio').not().isEmpty(),
        check('apellidoPaterno', 'el apellidoPaterno es obligatorio').not().isEmpty(),
        check('apellidoMaterno', 'La apellidoMaterno es obligatorio').not().isEmpty(),
        check('carrera', 'La carrera es obligatorio').not().isEmpty(),
        validateFields
    ],
    createDocenteController
);
router.get('/', getDocenteController);

//editar
router.put('/:id',updateDocenteController);
router.delete('/:id',deleteDocenteController);

module.exports = router;
