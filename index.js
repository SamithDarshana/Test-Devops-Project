const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("You are almost there! Try again");
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
