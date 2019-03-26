const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted
} = require('../../db/dataHelpers/attendance');

router.get('', read);
router.post('', create);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;