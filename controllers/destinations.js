const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Destination.find()
    .then((destinations) => {
      res.render("destinations/index", { destinations });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Destination.create(req.body)
    .then(() => {
      res.redirect("/destinations");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("destinations/new", { message });
      } else {
        res.render("error404");
      }
    });
});

//new
router.get("/new", (req, res) => {
  res.render("destinations/new");
});

//comments
router.get("/:id", (req, res) => {
  db.Destination.findById(req.params.id)
    .populate("comments")
    .then((destination) => {
      console.log(destination.comments);
      res.render("destinations/show", { destination });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  db.Destination.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/destinations/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.delete("/:id", (req, res) => {
  db.Destination.findByIdAndDelete(req.params.id)
    .then((destination) => {
      res.redirect("/destinations");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/edit", (req, res) => {
  db.Destination.findById(req.params.id)
    .then((destination) => {
      res.render("destinations/edit", { destination });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  req.body.rant = req.body.rant ? true : false;
  db.Destination.findById(req.params.id)
    .then((destination) => {
      db.Comment.create(req.body)
        .then((comment) => {
          destination.comments.push(comment.id);
          destination.save().then(() => {
            res.redirect(`/destinations/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.delete("/:id/comment/:commentId", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      res.redirect(`/destinations/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

module.exports = router;
