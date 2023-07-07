import jsonServer from "json-server";
import { createDb } from "./db.ts";
import { csrfMiddleware } from "./csrfMiddleware.ts";
import { contentTypeMiddleware } from "./contentTypeMiddleware.ts";
import { timeStampMiddleware } from "./timeStampMiddleware.ts";
import { SERVER_XCSRF_TOKEN } from "./config.ts";

const { create, router: _router, defaults, bodyParser } = jsonServer;
const server = create();
const router = _router(createDb());
const jsonServerMiddlewares = defaults();

const DELAY = 500;
const API_BASE = "/api";
const PORT = 3001;

server.use(jsonServerMiddlewares);
server.use(csrfMiddleware);
server.use(contentTypeMiddleware);

server.use((req, res, next) => {
  setTimeout(next, DELAY);
});

server.use(bodyParser);
server.use(timeStampMiddleware);

server.get(`${API_BASE}/auth/xcsrftoken`, (req, res) => {
  res.status(200).send(JSON.stringify({ xcsrftoken: SERVER_XCSRF_TOKEN }));
});

server.use(API_BASE, router);

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
