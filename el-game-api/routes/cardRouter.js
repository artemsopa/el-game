const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');

router.get('/', cardController.getAllCards)
router.post('/add', cardController.addCard);
router.put('/code', cardController.addCode);
router.delete('/:id', cardController.deleteCard);

module.exports = router;