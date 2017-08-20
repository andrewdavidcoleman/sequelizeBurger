
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

  // GET route for getting all of the posts
  app.get("/api/burgers/", function(req, res) {
    db.Burgers.findAll({})
    .then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    db.Burgers.create(req.body).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function(req, res) {
    db.Burgers.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });
};
