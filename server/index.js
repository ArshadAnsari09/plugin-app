const express = require("express");
const dotenv = require("dotenv");
const { addDomain } = require("./controller/Domain");

const app = express();

//env config
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello!");
});
app.use("/api/add-domain", addDomain);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
