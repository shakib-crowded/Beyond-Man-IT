require("dotenv").config();

const server = require("./app");
const PORT = process.env.PORT || 5000;

const connectDb = require("./db/db");

connectDb();

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
