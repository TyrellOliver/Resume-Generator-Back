const express = require("express");
const users = express.Router();

const { getAllUsers } = require("../queries/users");

users.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    // console.log(allUsers)
    // res.status(200).json(allUsers);
    res.status(200).json({success:"All Users Route"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = users;
