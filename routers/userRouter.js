const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para mostrar los usuarios
router.post('/showAll', UserController.showAll);

module.exports = router;