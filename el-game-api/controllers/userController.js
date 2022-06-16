const ApiError = require('../errors/apiError');
const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, password) => {
    return jwt.sign(
        { id, email, password },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

class UserController {

    async registration(req, res, next) {
        const { firstn, lastn, email, phone, password, role } = req.body;
        try {
            if (!firstn || !lastn || !email || !phone || !password) {
                return next(ApiError.badRequest('Not all fields are correct'));
            }
            const candidate = await User.findOne({ where: { email } });
            if (candidate) {
                return next(ApiError.badRequest('Email is in use'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ firstn, lastn, email, phone, password: hashPassword, role });
            const userRole = user.role;
            const userId = user.id;
            const token = generateJwt(user.id, user.email, user.password);
            const response = { userId, userRole, token };
            return res.json(response);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async updateInfo(req, res, next) {
        const { id, country, city, region, address } = req.body;
        try {
            const user = await User.update({
                country, city, region, address
            },
                { where: { id } }
            );

            return res.json(user);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return next(ApiError.internal('User not found'));
            }
            const userId = user.id;
            const userRole = user.role;
            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.internal('Password is not correct'));
            }
            const token = generateJwt(user.id, user.email, user.password);
            const response = { userId, userRole, token };
            return res.json(response);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }

    }
}

module.exports = new UserController();