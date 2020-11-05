const express = require("express");
const router = express.Router();

//CRUD

//CREATE/POST ONE
router.post("/", (req, res) => {});

//READ/GET ALL
//on general route,no id needed
router.get("/", (req, res) => {
  res.send("Hello Universe");
});

//READ/GET ONE
//need id
router.get("/:id", (req, res) => {
  res.send(req.params);
});

//UPDATE/PUT/PATCH ONE
router.patch("/", (req, res) => {});

//DELETE ONE
//need id
router.delete("/:id", (req, res) => {});

//export the module
module.exports = router;
