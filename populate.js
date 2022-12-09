require("dotenv").config();
const connectDB = require("./db/connect");
const Language = require("./models/Language");

const jsonData = require("./languages.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Language.deleteMany();
    await Language.create(jsonData);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
