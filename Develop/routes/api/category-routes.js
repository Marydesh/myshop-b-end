const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Product
    ]
  })
    .then(categories => {
      res.json(categories)
    })
    .catch(error => res.status(500).json(error))
  // find all categories
  // be sure to include its associated Products
});


router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  })
    .then(categories => {
      res.json(categories)
    })
    .catch(error => res.status(500).json(error))

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(categories => {
    res.status(200).json(categories)
  })
  .catch(error => res.status(500).json(error))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where: {
      id: req.params.id
    }
  })
    .then(categories => {
      res.json(categories)
    })
    .catch(error => res.status(500).json(error))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categories => {
      res.json(categories)
    })
    .catch(error => res.status(500).json(error))
});

module.exports = router;
