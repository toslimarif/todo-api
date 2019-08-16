const express = require("express");
const TodoController = require('../controllers/todo');

const router = express.Router();

router.post('/', TodoController.createTodo);

router.get('/', TodoController.getTodos);

router.get('/:todoId', TodoController.getTodo);

router.put('/:todoId', TodoController.updateTodo);

router.patch('/:todoId', TodoController.completeTodo);

router.delete('/:todoId', TodoController.deleteTodo);

module.exports = router;