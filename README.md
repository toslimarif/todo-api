# TODO App - REST API Documentation
RESTful API Designed in Node.js for a very simple TODO application.

## Index
* [Requirements](#requirements)
* [Installation](#installation)
* [Schema](#schema)
* [Authentication](#authentication)
* [Root End-Point](#root-end-point)
* [Core Resources](#core-resources)
* [Documentation](#documentation)
* [Request & Response Examples](#request--response-examples)

## Requirements

- [node & npm](http://nodejs.org)
- [MongoDB](https://www.mongodb.com/): Make sure you have your own local or remote MongoDB database URI configured in `credentials/mongo.js`
- [PostMan](https://www.getpostman.com/)

## Installation

1. Clone the repository: `git clone git@github.com:toslimarif/todo-api.git`
2. Install the application: `npm install`
3. Place your own MongoDB URI in `credentials/mongo.js`
3. Start the server: `node server.js` or `node .`
4. Open PostMan and make a `GET` request to `http://localhost:3000/api/info/`

## Schema

1. All API access is over HTTP, and accessed from `http://localhost:3000/api/v1`.
2. All data is sent and received as JSON.
3. Blank fields are included as `null` instead of being omitted.
4. All timestamps return in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`

## Authentication
There are no authentication implemented yet. So, all the end-points are open.

## Root End-Point
`http://localhost:3000/api/v1`

## Core Resources
### Todo
`Todo` object represents snapshot of a specific Todo with a unique Id. You can retrieve it to see details about the Todo.

#### Schema
```javascript
{
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'N/A'
    },
    onDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    cardColor: {
        type: String,
        required: true,
        default: '#cddc39'
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    timestamps: {
        createdOn: {
            type: Date,
            required: true,
            default: Date.now
        },
        modifiedOn: {
            type: Date,
            required: true,
            default: Date.now
        },
        completedOn: {
            type: Date,
            default: null
        }
    }
}
```
#### End-Points
| Method | End-Point | Description |
| --- | --- | --- |
| `GET` | `/todo` | List all *todos* |
| `POST` | `/todo` | Create a new *todo* |
| `GET` | `/todo/:id` | Fetch a specific *todo* |
| `PUT` | `/todo/:id` | Edit existing *todo* |
| `PATCH` | `/todo/:id` | Mark an existing *todo* as complete |
| `DELETE` | `/todo/:id` | Delete existing *todo* |

## Documentation
https://documenter.getpostman.com/view/8474302/SVfGyBSu

## Request & Response Examples

### API Resources
  - [GET /todo](#get-todo)
  - [GET /todo/:todoId](#get-todo:todoId)
  - [POST /todo](#post-todo)
  - [PUT /todo/:todoId](#put-todo:todoId)
  - [PATCH /todo/:todoId](#patch-todo:todoId)
  - [DELETE /todo/:todoId](#delete-todo:todoId)

### GET /todo
To get the list of all *todos*
#### Resourse Url
`http://localhost:3000/api/v1/todo`
#### Request Params
`N/A`
#### Request Body
`N/A`
#### Response
```javascript
{
    "status": "Success",
    "message": "Todos Fetched Successfully!",
    "todos": [
        {
            "timestamps": {
                "completedOn": null,
                "createdOn": "2019-08-16T17:07:07.171Z",
                "modifiedOn": "2019-08-16T17:07:07.171Z"
            },
            "description": "Write documentation for Todo API",
            "cardColor": "#ff7043",
            "isCompleted": false,
            "_id": "5d56e2bbc2a36326a0a57c19",
            "title": "Write Documentation",
            "onDate": "2019-08-16T15:47:30.889Z",
            "__v": 0
        },
        {
            "timestamps": {
                "completedOn": null,
                "createdOn": "2019-08-16T17:08:48.376Z",
                "modifiedOn": "2019-08-16T17:08:48.376Z"
            },
            "description": "Write Test-Cases for Todo API",
            "cardColor": "#4dd0e1",
            "isCompleted": false,
            "_id": "5d56e320c2a36326a0a57c1a",
            "title": "Write Test-Cases",
            "onDate": "2019-08-16T15:47:30.889Z",
            "__v": 0
        }
    ],
    "todoCount": 2
}
```

### GET /todo/:todoId
To get a specific *todo*
#### Resourse Url
`http://localhost:3000/api/v1/todo/{{TODO_ID}}`
#### Request Params
`{{TODO_ID}}`
#### Request Body
`N/A`
#### Response
```javascript
{
    "status": "Success",
    "message": "Todo Fetched Successfully!",
    "todo": {
        "timestamps": {
            "completedOn": null,
            "createdOn": "2019-08-16T17:07:07.171Z",
            "modifiedOn": "2019-08-16T17:07:07.171Z"
        },
        "description": "Write documentation for Todo API",
        "cardColor": "#ff7043",
        "isCompleted": false,
        "_id": "5d56e2bbc2a36326a0a57c19",
        "title": "Write Documentation",
        "onDate": "2019-08-16T15:47:30.889Z",
        "__v": 0
    }
}
```

### POST /todo
To create a new *todo*
#### Resourse Url
`http://localhost:3000/api/v1/todo`
#### Request Params
`N/A`
#### Request Body
```javascript
{
    "title": "Write Test-Cases",
    "description": "Write Test-Cases for Todo API",
    "onDate": "2019-08-16T15:47:30.889Z",
    "cardColor": "#4dd0e1"
}
```
#### Response
```javascript
{
    "status": "Success",
    "message": "Todo Created SuccessFully!",
    "todo": {
        "timestamps": {
            "completedOn": null,
            "createdOn": "2019-08-16T17:08:48.376Z",
            "modifiedOn": "2019-08-16T17:08:48.376Z"
        },
        "description": "Write Test-Cases for Todo API",
        "cardColor": "#4dd0e1",
        "isCompleted": false,
        "_id": "5d56e320c2a36326a0a57c1a",
        "title": "Write Test-Cases",
        "onDate": "2019-08-16T15:47:30.889Z",
        "__v": 0,
        "todoId": "5d56e320c2a36326a0a57c1a"
    }
}
```

### PUT /todo/:todoId
To edit an existing *todo*
#### Resourse Url
`http://localhost:3000/api/v1/todo/{{TODO_ID}}`
#### Request Params
`{{TODO_ID}}`
#### Request Body
```javascript
{
    "title": "UPDATED: Write Documentation",
    "description": "UPDATED: Write documentation for Todo API"
}
```
#### Response
```javascript
{
    "status": "Success",
    "message": "Todo Updated Successfully!",
    "todo": {
        "timestamps": {
            "completedOn": "2019-08-16T18:10:33.224Z",
            "createdOn": "2019-08-16T17:07:07.171Z",
            "modifiedOn": "2019-08-16T18:14:13.499Z"
        },
        "description": "UPDATED: Write documentation for Todo API",
        "cardColor": "#ff7043",
        "isCompleted": true,
        "_id": "5d56e2bbc2a36326a0a57c19",
        "title": "UPDATED: Write Documentation",
        "onDate": "2019-08-16T15:47:30.889Z",
        "__v": 0
    }
}
```
### PATCH /todo/:todoId
To mark a *todo* as Complete
#### Resourse Url
`http://localhost:3000/api/v1/todo/{{TODO_ID}}`
#### Request Params
`{{TODO_ID}}`
#### Request Body
`N/A`
#### Response
```javascript
{
    "status": "Success",
    "message": "Todo Marked as Completed!",
    "todo": {
        "timestamps": {
            "completedOn": "2019-08-16T18:10:33.224Z",
            "createdOn": "2019-08-16T17:07:07.171Z",
            "modifiedOn": "2019-08-16T18:10:33.224Z"
        },
        "description": "Write documentation for Todo API",
        "cardColor": "#ff7043",
        "isCompleted": true,
        "_id": "5d56e2bbc2a36326a0a57c19",
        "title": "Write Documentation",
        "onDate": "2019-08-16T15:47:30.889Z",
        "__v": 0
    }
}
```

### DELETE /todo/:todoId
To delete an existing *todo*
#### Resourse Url
`http://localhost:3000/api/v1/todo/{{TODO_ID}}`
#### Request Params
`{{TODO_ID}}`
#### Request Body
`N/A`
#### Response
```javascript
{
    "status": "Success",
    "message": "Todo Deleted Successfully!"
}
```