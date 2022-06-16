const { Product, DetailsImg, Reviews, FrontImg, Wishlist } = require('../models/models');
const ApiError = require('../errors/apiError');

class ProductController {

    async getAllProducts(req, res, next) {
        const { vendor_url, category_url, type_url } = req.query;
        let products;
        try {
            if (!vendor_url && !category_url && !type_url) {
                products = await Product.findAll({
                    include: [
                        { model: FrontImg, as: 'frontImg' }
                    ]
                });
            }
            if (vendor_url && !category_url && !type_url) {
                products = await Product.findAll({
                    where: { vendor_url },
                    include: [
                        { model: FrontImg, as: 'frontImg' }
                    ]
                });
            }
            if (!vendor_url && category_url && !type_url) {
                products = await Product.findAll({
                    where: { category_url },
                    include: [
                        { model: FrontImg, as: 'frontImg' }
                    ]
                });
            }
            if (!vendor_url && !category_url && type_url) {
                products = await Product.findAll({
                    where: { type_url },
                    include: [
                        { model: FrontImg, as: 'frontImg' }
                    ]
                });
            }
            return res.json(products);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getOneProduct(req, res, next) {
        const { slug } = req.params;
        try {
            let product = await Product.findOne(
                {
                    where: { slug },
                    include: [
                        { model: FrontImg },
                        { model: DetailsImg },
                        { model: Reviews }
                    ]
                });
            return res.json(product);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addReviews(req, res, next) {
        const { productId, reviews } = req.body;
        try {
            if (reviews) {
                reviews.forEach(i =>
                    Reviews.create({
                        ratings: i.ratings,
                        feedback: i.feedback,
                        productId: productId
                    }))
            }
            return res.json(reviews);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addDetailsImgs(req, res, next) {
        const { productId, detailsImg } = req.body;
        try {
            if (detailsImg) {
                detailsImg.forEach(i =>
                    DetailsImg.create({
                        url: i.url,
                        productId: productId
                    }))
            }
            return res.json(detailsImg);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addFrontImg(req, res, next) {
        const { url, productId } = req.body;
        try {
            let image = await FrontImg.create({ url, productId });
            return res.json(image);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addProduct(req, res, next) {

        try {
            const { title, slug, currencyType, oldPrice, currentPrice, sku,
                vendor, vendor_url, category, category_url, type, type_url,
                shortDesc, LongDesc, quantity, inStock, outOfStock, onSell, hot } = req.body;

            const product = await Product.create({
                title, slug, currencyType, oldPrice, currentPrice, sku,
                vendor, vendor_url, category, category_url, type, type_url,
                shortDesc, LongDesc, quantity, inStock, outOfStock, onSell, hot
            });

            return res.json(product);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }

    }

    async updateProduct(req, res, next) {
        const { id, title, slug, currencyType, oldPrice, currentPrice, sku,
            vendor, vendor_url, category, category_url, type, type_url,
            shortDesc, LongDesc, quantity, inStock, outOfStock, onSell, hot } = req.body;

        try {

            const product = await Product.update({
                title, slug, currencyType, oldPrice, currentPrice, sku,
                vendor, vendor_url, category, category_url, type, type_url,
                shortDesc, LongDesc, quantity, inStock, outOfStock, onSell, hot
            },
                { where: { id } }
            );

            return res.json(product);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }

    }

    async deleteProduct(req, res, next) {
        const { id } = req.params;
        try {
            await Product.destroy({ where: { id } });
            return res.json('Deleted!');
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }

    }

    async getWishlist(req, res, next) {
        const { userId } = req.body;
        try {
            let wishlist = await Wishlist.findAll(
                {
                    where: { userId },
                    include: [
                        {
                            model: Product,
                            include: [
                                { model: FrontImg }
                            ]
                        }
                    ]
                });
            return res.json(wishlist);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addToWish(req, res, next) {
        const { userId, productId } = req.body;
        try {
            let wish = await Wishlist.create({ userId, productId });
            return res.json(wish);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async deleteWish(req, res, next) {
        const { id } = req.params;
        try {
            await Wishlist.destroy({ where: { id } });
            return res.json('Deleted!');
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new ProductController();