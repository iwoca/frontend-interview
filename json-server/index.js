const jsonServer = require("json-server");
const server = jsonServer.create();
const db = require("./db.js");
const router = jsonServer.router(db());
const jsonServerMiddlewares = jsonServer.defaults();
const csrfMiddleware = require("./csrfMiddleware.js");
const contentTypeMiddleware = require("./contentTypeMiddleware.js");
const timeStampMiddleware = require("./timeStampMiddleware.js");
const { SERVER_XCSRF_TOKEN } = require("./config.js");

const DELAY = 500;
const API_BASE = "/api";
const PORT = 3001;

server.use(jsonServerMiddlewares);
server.use(csrfMiddleware);
server.use(contentTypeMiddleware);

server.use((req, res, next) => {
  setTimeout(next, DELAY);
});

server.use(jsonServer.bodyParser);
server.use(timeStampMiddleware);

server.use(API_BASE, router);
server.get("/auth/xcsrftoken", (req, res) => {
  res.status(200).send(JSON.stringify({ xcsrftoken: SERVER_XCSRF_TOKEN }));
});

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
