const router = require('express').Router();
const { Category, Product,  } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories & include its associated Products
  try {
    const allCatagories = await Category.findAll( {
      include: [{model: Product}]
    });
    res.status(202).json(allCatagories);
  } catch (err) {
    res.status(505).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value & include its associated Products
  try {
    const categoryID = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });

    if (!categoryID) {
      res.status(404).json({message: "Category ID not found 🚫"});
      return;
    }
    res.status(202).json(categoryID);
  } catch (err) {
    res.status(505).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    });
    res.status(202).json(newCategory);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryID = await Category.update( req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryID) {
      res.status(404).json({message: "Category ID Not Found 🚫"});
      return;
    }
    res.status(202).json(categoryID);
  } catch (err) {
    res.status(505).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  const categoryID = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!categoryID) {
    res.status(404).json({message: "Category ID Not Found 🚫"});
    return;
  }
  res.status(202).json(categoryID);
} catch (err) {
  res.status(505).json(err);
}
});

module.exports = router;