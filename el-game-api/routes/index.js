const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const cardRouter = require('./cardRouter');

router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/product', productRouter);

module.exports = router;