require("dotenv").config();
require("express-async-errors");

const serverless = require("serverless-http");

const express = require("express");
const app = express();
const connectDB = require("../db/connect");
const languagesRouter = require("../routes/languages-route");

app.use(express.json());
app.use("/api/v1/languages", languagesRouter);

app.use("./netlify/functions/server", languagesRouter);

const notFoundMiddleware = require("../middleware/not-found");
const errorHandlerMiddleware = require("../middleware/error-handler");
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(` server listening on port ${PORT}`));
  } catch (error) {}
};

start();

module.exports.handler = serverless(app);
