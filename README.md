# TODO App - REST API Documentation
RESTful API Designed in Node.js for a very simple TODO application.

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
There are no authentication implemented yet. So, all the endpoints are open.

## Root endpoint
`http://localhost:3000/api/v1`