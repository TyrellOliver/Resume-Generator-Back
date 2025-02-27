const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ idex: "Welcome to the index page!" });
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
