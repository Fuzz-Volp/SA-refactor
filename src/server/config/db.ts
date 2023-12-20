import { connect } from "mongoose";
import config from "./config";
import logging from "./logging";

const namespace = "Mongoose";

/** Mongoose */
export const connectDB = async () => {
  await connect(config.mongo.url, config.mongo.options)
    .then(() => {
      logging.info("mongoose is connected", namespace);
    })
    .catch((error) => {
      logging.error(error, namespace);
    });
};
