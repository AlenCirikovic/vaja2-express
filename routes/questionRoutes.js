const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionController');

router.get('/', controller.question_list);
router.get('/:id', controller.question_detail);
router.post('/', controller.question_create);
router.put('/:id', controller.question_update);
router.delete('/:id', controller.question_delete);

module.exports = router;
