var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get
router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post
router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put
router.put("/burgers/update", function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
