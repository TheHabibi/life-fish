const express = require("express");
const app = express();
require("colors");
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello Life Fish!");
});

app.listen(port, () => {
  console.log(`Life Fish Server listening at http://localhost:${port}`.green);
});
