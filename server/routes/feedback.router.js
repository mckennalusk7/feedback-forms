const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
