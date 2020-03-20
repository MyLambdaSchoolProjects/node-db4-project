const express = require("express");

const recipies = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  recipies
    .getRecipies()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Could not fetch recipies" });
    });
});

module.exports = router;
