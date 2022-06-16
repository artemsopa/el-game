const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/reg', userController.registration);
router.post('/login', userController.login);
router.put('/info', userController.updateInfo);

module.exports = router;