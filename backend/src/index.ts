import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
const routes = require("./app/routes.js");
require("express-async-errors");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  (
    error: ErrorRequestHandler,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    response.sendStatus(500);
  }
);

app.listen(3001, () => console.log("Server iniciado em http://localhost:3001"));
