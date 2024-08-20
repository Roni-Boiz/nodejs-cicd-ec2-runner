const express = require("express");
const app = express();

const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Welcome to GitHub CI&CD Pipeline!!!",
  });
});

app.listen(port, () => {
  console.log("Listening on " + port);
});

module.exports = app;