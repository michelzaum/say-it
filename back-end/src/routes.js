const { Router } = require('express');
const UserController = require('./controllers/UserController');

const router = Router();

router.get('/users', UserController.listUsers);
router.get('/users/:id', UserController.findById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;