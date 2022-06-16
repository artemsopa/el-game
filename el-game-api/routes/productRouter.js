const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController')

router.get('/', productController.getAllProducts);
router.get('/:slug', productController.getOneProduct);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.post('/frontimg', productController.addFrontImg);
router.post('/detailsimg', productController.addDetailsImgs);
router.post('/reviews', productController.addReviews);
//router.get('/wishlist', productController.getWishlist);
//router.post('/wishlist', productController.addToWish);
//router.delete('/wishlist/:id', productController.deleteWish);


module.exports = router;