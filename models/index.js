// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: "CASCADE",
  through: {
    model: ProductTag,
    unique: false
  },
  as: "product_has_many_tags"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: "tag_has_many_products"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};