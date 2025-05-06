const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json("GET ALL USERS");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(`GET USER WITH ID ${id}`);
});

router.post("/", (req, res) => {
  res.status(201).json("USER CREATED");
});

module.exports = router;

// localhost:3000/user
