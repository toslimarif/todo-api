const app = require("./app");
const debug = require("debug")("todo-api");
const http = require("http");

// Normalize Port
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// Setting up callbacks
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const onServerStart = () => {
  console.log('TODO Api server is running on PORT: ',
    app.get('port'));
}

// Set the PORT
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Start the Server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, onServerStart);