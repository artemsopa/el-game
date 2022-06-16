const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstn: { type: DataTypes.STRING, allowNull: false },
    lastn: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
    country: { type: DataTypes.STRING, allowNull: true },
    city: { type: DataTypes.STRING, allowNull: true },
    region: { type: DataTypes.STRING, allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true }
});

/*const Wishlist = sequelize.define('wishlist', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});*/

const Card = sequelize.define('card', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false },
    cvv: { type: DataTypes.STRING, allowNull: false },
    sum: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, defaultValue: 'non-sented' }
});

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    slug: { type: DataTypes.STRING, unique: true, allowNull: false },
    currencyType: { type: DataTypes.STRING, allowNull: false },
    oldPrice: { type: DataTypes.DECIMAL(10,2), allowNull: true },
    currentPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    sku: { type: DataTypes.STRING, allowNull: false },
    vendor: { type: DataTypes.STRING, allowNull: false },
    vendor_url: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    category_url: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    type_url: { type: DataTypes.STRING, allowNull: false },
    shortDesc: { type: DataTypes.STRING(5000), allowNull: true },
    LongDesc: { type: DataTypes.STRING(20000), allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    inStock: { type: DataTypes.BOOLEAN, allowNull: false },
    outOfStock: { type: DataTypes.BOOLEAN, allowNull: false },
    onSell: { type: DataTypes.BOOLEAN, allowNull: false },
    hot: { type: DataTypes.BOOLEAN, allowNull: false }
});

const FrontImg = sequelize.define('frontImg', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: DataTypes.STRING, allowNull: false }
});

const DetailsImg = sequelize.define('detailsImg', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: DataTypes.STRING, allowNull: false }
});

const Reviews = sequelize.define('reviews', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ratings: { type: DataTypes.INTEGER, allowNull: false },
    feedback: { type: DataTypes.STRING, allowNull: false }
});

//User.hasMany(Wishlist);
//Wishlist.belongsTo(User);

//Product.hasMany(Wishlist);
//Wishlist.belongsTo(Product);

Product.hasOne(FrontImg);
FrontImg.belongsTo(Product);

Product.hasMany(DetailsImg);
FrontImg.belongsTo(Product);

Product.hasMany(Reviews);
Reviews.belongsTo(Product);

module.exports = {
    User,
    //Wishlist,
    Card,
    Product,
    FrontImg,
    DetailsImg,
    Reviews
}