const express = require("express");
const users = express.Router();

users.get("/", (req, res) => {
  try {
    res.status(200).json({ Success: "All Users" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = users;
