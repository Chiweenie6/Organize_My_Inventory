const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  // find all tags & include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product, through: ProductTag, as: "tag_has_many_products"}]      
    });
    res.status(202).json(allTags);
  } catch (err) {
    res.status(505).json(err);
  }
});

// GET one tag
router.get('/:id', async (req, res) => {
  // find a single tag by its `id` & include its associated Product data
  try {
    const tagID = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag, as: "tag_has_many_products"}]
    });
    if (!tagID) {
      res.status(404).json({message: "Tag ID Not Found 🚫"});
      return;
    }
    res.status(202).json(tagID);
  } catch (err) {
    res.status(505).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(202).json(newTag);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagID = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!tagID) {
      res.status(404).json({message: "Tag ID Not Found 🚫"});
      return;
    }
    res.status(202).json(tagID);
  } catch (err) {
    res.status(505).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one tag by its `id` value
  try {
    const tagID = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagID) {
      res.status(404).json({message: "Tag ID Not Found 🚫"});
      return;
    }
    res.status(202).json(tagID);
    } catch (err) {
      res.status(505).json(err);
    }
});

module.exports = router;