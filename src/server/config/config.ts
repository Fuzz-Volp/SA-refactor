import dotenv from "dotenv";
dotenv.config();

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const DATABASE = process.env.DATABASE || "";
const PORT = process.env.PORT || 3001;
const SALT = process.env.SALT || 8;
const SECRET = process.env.SECRET || "";

const config = {
  mongo: {
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
      autoIndex: false,
      retryWrites: false,
    },
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.k6nwrgm.mongodb.net/${DATABASE}`,
  },
  server: {
    host: "localhost",
    port: PORT,
  },

  secret: SECRET,
};

export default config;
