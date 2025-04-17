const express = require('express');
const router = express.Router();
const controller = require('../controllers/answerController');

router.get('/', controller.answer_list);
router.get('/:id', controller.answer_detail);
router.post('/', controller.answer_create);
router.put('/:id', controller.answer_update);
router.delete('/:id', controller.answer_delete);

module.exports = router;
