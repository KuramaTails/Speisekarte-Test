const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors({ origin: "http://127.0.0.1:5500" }));

fs.readdirSync("./routes").forEach((route) => {
  var routeName = route.split(".")[0];
  require(`./routes/${routeName}`)(app);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
