const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.user_list);
router.get('/:id', controller.user_detail);
router.post('/', controller.user_create);
router.put('/:id', controller.user_update);
router.delete('/:id', controller.user_delete);

module.exports = router;
