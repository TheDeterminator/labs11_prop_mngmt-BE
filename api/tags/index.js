const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  readById
} = require('../../db/dataHelpers/tags');

router.post('', create);
router.get('', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;
