import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import logging from "./config/logging";
import config from "./config/config";
import { connectDB } from "./config/db";
import bodyParser from "body-parser";

const app = express();

connectDB();

/** Config */

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

/** Health Check */
app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

/** API Check */

app.get("/api", (_, res) => {
  res.json({ message: "The API is Alive!!!" });
});

ViteExpress.listen(app, 3001, () =>
  logging.info(
    `Server is running at ${config.server.host}:${config.server.port} ...`
  )
);
