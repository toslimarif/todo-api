const express = require("express");
const TodoController = require('../controllers/todo');

const router = express.Router();

router.post('/', TodoController.createTodo);

router.get('/', TodoController.getTodos);

router.put('/:todoId', TodoController.updateTodo);

router.delete('/:todoId', TodoController.deleteTodo);

module.exports = router;