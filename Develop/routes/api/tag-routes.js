const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      Product
    ]
  })
    .then(tags => {
      res.json(tags)
    })
    .catch(error => res.status(500).json(error))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  })
    .then(tags => {
      res.json(tags)
    })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(tags => {
    res.status(200).json(tags)
  })
  .catch(error => res.status(500).json(error))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  })
    .then(tags => {
      res.json(tags)
    })
    .catch(error => res.status(500).json(error))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tags => {
      res.json(tags)
    })
    .catch(error => res.status(500).json(error))
});

module.exports = router;
