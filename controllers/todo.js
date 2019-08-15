const Todo = require("../models/todo");

// To Create a Todo
exports.createTodo = (req, res, next) => {
    // Log This Request
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );

    // Create a new todo object
    // req.body should strictly follow Todo Model
    const todo = new Todo(req.body);

    // Save the object as document in MongoDb
    todo.save()
        .then(
            createdTodo => {
                res.status(201).json({
                    status: 'Success',
                    message: 'Todo Created SuccessFully!',
                    todo: {
                        ...createdTodo._doc,
                        todoId: createdTodo._id
                    }
                })
            }
        )
        .catch(
            error => {
                res.status(500).json({
                    status: 'Error',
                    message: 'Error in DB Operation!',
                    error: error
                });
            }
        )
}

// To get all the Todos
exports.getTodos = (req, res, next) => {
    // Log This Request
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );

    // Set up Todo query
    const TodoQuery = Todo.find().sort({
        onDate: -1
    });
    // Execute todo query
    TodoQuery.then(
            todos => {
                if (!todos.length) {
                    return res.status(404).json({
                        status: 'Success',
                        message: 'No Todos found!',
                        todos: todos,
                        todoCount: todos.length
                    });
                }
                res.status(200).json({
                    status: 'Success',
                    message: 'Todos Fetched Successfully!',
                    todos: todos,
                    todoCount: todos.length
                });
            }
        )
        .catch(
            error => {
                res.status(500).json({
                    status: 'Error',
                    message: 'Error in DB Operation!',
                    error: error
                });
            }
        )
}

// To Update a Todo
exports.updateTodo = (req, res, next) => {
    // Log This Request
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );
}

// To Delete a Todo
exports.deleteTodo = (req, res, next) => {
    // Log This Request
    console.log(
        (new Date()).toISOString(),
        req.method,
        req.baseUrl
    );
}